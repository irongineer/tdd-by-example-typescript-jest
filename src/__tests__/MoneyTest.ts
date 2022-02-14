import { Money } from '../Money';

describe('Money.ts', () => {
  describe('Dollar', () => {
    it('Multiplies', () => {
      const five = Money.dollar(5);
      expect(five.times(2)).toStrictEqual(Money.dollar(10));
      expect(five.times(3)).toStrictEqual(Money.dollar(15));
    });

    it('Equals', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
      expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    });
  });

  describe('Franc', () => {
    it('Multiplies', () => {
      const five = Money.franc(5);
      expect(five.times(2)).toStrictEqual(Money.franc(10));
      expect(five.times(3)).toStrictEqual(Money.franc(15));
    });

    it('Equals', () => {
      expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
      expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
    });
  });
  describe('Dollar - Franc', () => {
    it('Do not equal', () => {
      expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
    });

    it('Currency', () => {
      expect(Money.dollar(1).currency()).toBe('USD');
      expect(Money.franc(1).currency()).toBe('CHF');
    });
  });
});
