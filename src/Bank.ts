import { Money, Expression } from './Money';

export class Bank {
  // eslint-disable-next-line class-methods-use-this
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
