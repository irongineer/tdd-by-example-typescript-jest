import { Dollar } from '../Dollar';

describe('Money.ts', () => {
  it('Multiplication', () => {
    const five = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});
