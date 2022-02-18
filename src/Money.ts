/* eslint-disable @typescript-eslint/no-use-before-define */

import { Expression } from './Expression';

/* eslint-disable max-classes-per-file */
export class Money implements Expression {
  constructor(protected amount: number, protected _currency: string) {}

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this._currency);
  }

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

  public toString(): string {
    return `amount: ${this.amount} / currency: ${this._currency}`;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
