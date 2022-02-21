/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { pair } from './Pair';

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

  public reduce(bank: Bank, to: string) {
    const rate = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
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
  reduce(bank: Bank, to: string): Money;
}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  public reduce(bank: Bank, to: string): Money {
    const amount = this.augend.amount() + this.addend.amount();
    return new Money(amount, to);
  }
}
export class Bank {
  private rates: Map<string, number>;

  constructor() {
    this.rates = new Map();
  }

  // eslint-disable-next-line class-methods-use-this
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates.set(pair(from, to), rate);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    const rate = this.rates.get(pair(from, to));
    if (!rate) {
      throw new Error(`Failed to get rate from: ${from} / to: ${to}`);
    }
    return rate;
  }
}
