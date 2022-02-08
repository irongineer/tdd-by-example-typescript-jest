import { Dollar } from '../Dollar';

describe('Money.ts', () => {
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
