import { Money, Dollar, Franc } from '../Money';

describe('Money.ts', () => {
  describe('Dollar', () => {
    it('Multiplies', () => {
      const five = Money.dollar(5);
      expect(five.times(2)).toEqual(Money.dollar(10));
      expect(five.times(3)).toEqual(Money.dollar(15));
    });

    it('Equals', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
      expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    });
  });

  describe('Franc', () => {
    it('Multiplies', () => {
      const five = Money.franc(5);
      expect(five.times(2)).toEqual(Money.franc(10));
      expect(five.times(3)).toEqual(Money.franc(15));
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

    it('Equals with different classes', () => {
      expect(new Dollar(10, 'CHF')).toEqual(new Money(10, 'CHF'));
      expect(new Franc(10, 'CHF')).toEqual(new Money(10, 'CHF'));
    });

    it('Currency', () => {
      expect(Money.dollar(1).currency()).toBe('USD');
      expect(Money.franc(1).currency()).toBe('CHF');
    });
  });
});
