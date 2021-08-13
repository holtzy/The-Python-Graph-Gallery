export default function(a, b) {
  return a == null || b == null ? NaN
    : a < b ? -1
    : a > b ? 1
    : a >= b ? 0
    : NaN;
}
