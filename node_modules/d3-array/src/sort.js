import ascending from "./ascending.js";

export default function sort(values, comparator = ascending) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).sort(comparator);
}
