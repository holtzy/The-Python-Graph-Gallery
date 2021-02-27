import AsyncGenerator from "../AsyncGenerator/_index.mjs";
export default function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}