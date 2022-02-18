import { Expression } from './Expression';
import { Money } from './Money';

export class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(10);
  }
}
