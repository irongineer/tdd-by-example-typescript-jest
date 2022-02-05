import { Dollar } from '../Dollar';

describe('Money.ts', () => {
  it('Multiplication', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
