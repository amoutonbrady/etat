import { createEtat } from "../src";

export const useTestStore = createEtat(
  'test',
  { 
    a: 0, 
    get double(): number { return this.a * 2 },
  }
);
