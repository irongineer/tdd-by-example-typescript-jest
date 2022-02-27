import { Money, Sum, Bank, Expression } from '../Money';

describe('Money.ts', () => {
  it('Multiplication', () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  });

  it('Currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  it('Simple addition', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toEqual(Money.dollar(10));
  });

  it('Plus returns Sum', () => {
    const five = Money.dollar(5);
    const result = five.plus(five);
    const sum = result as Sum;
    expect(sum.augend).toStrictEqual(five);
    expect(sum.addend).toStrictEqual(five);
  });

  it('Reduce Sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(7));
  });

  it('Reduce Money', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

  it('Reduce Money different currency', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result = bank.reduce(Money.franc(2), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

  it('Identity rate', () => {
    expect(new Bank().rate('USD', 'USD')).toBe(1);
  });

  it('Mixed addition', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(result).toEqual(Money.dollar(10));
  });

  it('Sum plus Money', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(15));
  });

  it('Sum times', () => {
    const fiveBucks = Money.dollar(5);
    const tenFrancs = Money.franc(10);
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrancs).times(2);
    const result = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(20));
  });
});
