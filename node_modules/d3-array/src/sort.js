import ascending from "./ascending.js";
import permute from "./permute.js";

export default function sort(values, f = ascending) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  if (f.length === 1) {
    f = values.map(f);
    return permute(values, values.map((d, i) => i).sort((i, j) => ascending(f[i], f[j])));
  }
  return values.sort(f);
}
