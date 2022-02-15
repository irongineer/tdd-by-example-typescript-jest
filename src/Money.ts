/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */
export class Money {
  constructor(protected amount: number, protected _currency: string) {}

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  currency(): string {
    return this._currency;
  }

  public equals(object: object): boolean {
    const money = object as Money;
    return this.amount === money.amount && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }
}

export class Dollar extends Money {
  constructor(protected amount: number, protected _currency: string) {
    super(amount, _currency);
  }

  currency(): string {
    return this._currency;
  }
}

export class Franc extends Money {
  constructor(protected amount: number, protected _currency: string) {
    super(amount, _currency);
  }

  currency(): string {
    return this._currency;
  }
}
