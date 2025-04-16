export function calc(x: number, y: number, op: string): number {
 switch (op) {
  case '+':
   return x + y;
  case '-':
   return x - y;
  default:
   return 0
 }

}