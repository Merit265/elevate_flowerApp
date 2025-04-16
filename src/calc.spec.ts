import { calc } from "./calc"

describe('calc function', () => {
 it('should make sum operation', () => {
  expect(calc(4, 2, '+')).toBe(6);
 });
 it('should make sub operation', () => {
  expect(calc(2, 4, '-')).toBe(-2);
 })
})