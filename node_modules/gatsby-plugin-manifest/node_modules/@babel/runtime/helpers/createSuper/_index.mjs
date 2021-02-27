import getPrototypeOf from "../getPrototypeOf/_index.mjs";
import isNativeReflectConstruct from "../isNativeReflectConstruct/_index.mjs";
import possibleConstructorReturn from "../possibleConstructorReturn/_index.mjs";
export default function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}