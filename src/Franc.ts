export class Franc {
  constructor(private amount: number) {}

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(object: object): boolean {
    const franc = object as Franc;
    return this.amount === franc.amount;
  }
}
