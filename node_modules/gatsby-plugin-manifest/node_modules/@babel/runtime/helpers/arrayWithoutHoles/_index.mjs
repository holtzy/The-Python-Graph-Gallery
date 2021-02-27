import arrayLikeToArray from "../arrayLikeToArray/_index.mjs";
export default function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}