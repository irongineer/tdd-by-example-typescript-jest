/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */
export abstract class Money {
  constructor(protected amount: number) {}

  abstract times(multiplier: number): Money;

  public equals(object: object): boolean {
    const money = object as Money;
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  constructor(protected amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(protected amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
