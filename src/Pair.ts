/* Original code of the book */
// export class Pair {
//   constructor(private from: string, private to: string) {}

//   public equals(object: object): boolean {
//     const pair = object as Pair;
//     return this.from === pair.from && this.to === pair.to;
//   }

//   public hashCode(): number {
//     return 0;
//   }
// }

/* Alternative code for TypeScript */

export function pair(from: string, to: string): string {
  return `${from}-${to}`;
}
