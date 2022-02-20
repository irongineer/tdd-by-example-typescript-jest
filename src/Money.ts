/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-use-before-define */

export class Money implements Expression {
  constructor(protected _amount: number, protected _currency: string) {}

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  amount(): number {
    return this._amount;
  }

  currency(): string {
    return this._currency;
  }

  public reduce(to: string) {
    return this;
  }

  public equals(object: object): boolean {
    const money = object as Money;
    return (
      this._amount === money._amount && this.currency() === money.currency()
    );
  }

  public toString(): string {
    return `amount: ${this._amount} / currency: ${this._currency}`;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}

export interface Expression {
  reduce(to: string): Money;
}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  public reduce(to: string): Money {
    const amount = this.augend.amount() + this.addend.amount();
    return new Money(amount, to);
  }
}
