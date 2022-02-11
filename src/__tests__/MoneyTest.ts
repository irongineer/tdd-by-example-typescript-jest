import { Dollar } from '../Dollar';
import { Franc } from '../Franc';

describe('Money.ts', () => {
  describe('Dollar', () => {
    it('Multiplies', () => {
      const five = new Dollar(5);
      expect(five.times(2)).toStrictEqual(new Dollar(10));
      expect(five.times(3)).toStrictEqual(new Dollar(15));
    });

    it('Equals', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
      expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    });
  });

  describe('Franc', () => {
    it('Multiplies', () => {
      const five = new Franc(5);
      expect(five.times(2)).toStrictEqual(new Franc(10));
      expect(five.times(3)).toStrictEqual(new Franc(15));
    });

    it('Equals', () => {
      expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
      expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    });
  });
  describe('Dollar - Franc', () => {
    it('Do not equal', () => {
      expect(new Dollar(5).equals(new Franc(5))).toBeFalsy();
    });
  });
});
