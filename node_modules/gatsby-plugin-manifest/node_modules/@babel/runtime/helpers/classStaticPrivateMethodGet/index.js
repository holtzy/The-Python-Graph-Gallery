function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
  if (receiver !== classConstructor) {
    throw new TypeError("Private static access of wrong provenance");
  }

  return method;
}

module.exports = _classStaticPrivateMethodGet;
module.exports["default"] = module.exports, module.exports.__esModule = true;