/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */
export abstract class Money {
  constructor(protected amount: number, protected _currency: string) {}

  abstract times(multiplier: number): Money;

  currency(): string {
    return this._currency;
  }

  public equals(object: object): boolean {
    const money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
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

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(protected amount: number, protected _currency: string) {
    super(amount, _currency);
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
