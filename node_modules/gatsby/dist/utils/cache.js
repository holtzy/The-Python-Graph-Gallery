"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _cacheManager = _interopRequireDefault(require("cache-manager"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _cacheFs = _interopRequireDefault(require("../cache/cache-fs"));

var _path = _interopRequireDefault(require("path"));

const MAX_CACHE_SIZE = 250;
const TTL = Number.MAX_SAFE_INTEGER;

class GatsbyCache {
  constructor({
    name = `db`,
    store = _cacheFs.default
  } = {}) {
    this.name = name;
    this.store = store;
    this.directory = _path.default.join(process.cwd(), `.cache/caches/${name}`);
  }

  init() {
    _fsExtra.default.ensureDirSync(this.directory);

    const configs = [{
      store: `memory`,
      max: MAX_CACHE_SIZE,
      ttl: TTL
    }, {
      store: this.store,
      ttl: TTL,
      options: {
        path: this.directory,
        ttl: TTL
      }
    }];
    const caches = configs.map(cache => _cacheManager.default.caching(cache));
    this.cache = _cacheManager.default.multiCaching(caches);
    return this;
  }

  async get(key) {
    return new Promise(resolve => {
      if (!this.cache) {
        throw new Error(`GatsbyCache wasn't initialised yet, please run the init method first`);
      }

      this.cache.get(key, (err, res) => {
        resolve(err ? undefined : res);
      });
    });
  }

  async set(key, value, args = {
    ttl: TTL
  }) {
    return new Promise(resolve => {
      if (!this.cache) {
        throw new Error(`GatsbyCache wasn't initialised yet, please run the init method first`);
      }

      this.cache.set(key, value, args, err => {
        resolve(err ? undefined : value);
      });
    });
  }

}

exports.default = GatsbyCache;
//# sourceMappingURL=cache.js.map