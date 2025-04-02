import { sum } from "@cawabunga/monorepo-demo-pkg-b";
import {sum as sum2} from "./sum";

console.log(sum(1, 2))

export function inc(a: number): ReturnType<typeof sum>{
  return sum(a, 1);
}

export {sum, sum2}