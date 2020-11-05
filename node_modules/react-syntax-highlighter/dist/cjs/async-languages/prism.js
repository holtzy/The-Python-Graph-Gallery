"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createLanguageAsyncLoader = _interopRequireDefault(require("./create-language-async-loader"));

var _default = {
  abap: (0, _createLanguageAsyncLoader.default)("abap", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/abap.js");
    });
  }),
  actionscript: (0, _createLanguageAsyncLoader.default)("actionscript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/actionscript.js");
    });
  }),
  ada: (0, _createLanguageAsyncLoader.default)("ada", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/ada.js");
    });
  }),
  apacheconf: (0, _createLanguageAsyncLoader.default)("apacheconf", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/apacheconf.js");
    });
  }),
  apl: (0, _createLanguageAsyncLoader.default)("apl", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/apl.js");
    });
  }),
  applescript: (0, _createLanguageAsyncLoader.default)("applescript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/applescript.js");
    });
  }),
  arduino: (0, _createLanguageAsyncLoader.default)("arduino", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/arduino.js");
    });
  }),
  arff: (0, _createLanguageAsyncLoader.default)("arff", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/arff.js");
    });
  }),
  asciidoc: (0, _createLanguageAsyncLoader.default)("asciidoc", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/asciidoc.js");
    });
  }),
  asm6502: (0, _createLanguageAsyncLoader.default)("asm6502", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/asm6502.js");
    });
  }),
  aspnet: (0, _createLanguageAsyncLoader.default)("aspnet", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/aspnet.js");
    });
  }),
  autohotkey: (0, _createLanguageAsyncLoader.default)("autohotkey", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/autohotkey.js");
    });
  }),
  autoit: (0, _createLanguageAsyncLoader.default)("autoit", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/autoit.js");
    });
  }),
  bash: (0, _createLanguageAsyncLoader.default)("bash", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/bash.js");
    });
  }),
  basic: (0, _createLanguageAsyncLoader.default)("basic", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/basic.js");
    });
  }),
  batch: (0, _createLanguageAsyncLoader.default)("batch", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/batch.js");
    });
  }),
  bison: (0, _createLanguageAsyncLoader.default)("bison", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/bison.js");
    });
  }),
  brainfuck: (0, _createLanguageAsyncLoader.default)("brainfuck", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/brainfuck.js");
    });
  }),
  bro: (0, _createLanguageAsyncLoader.default)("bro", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/bro.js");
    });
  }),
  c: (0, _createLanguageAsyncLoader.default)("c", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/c.js");
    });
  }),
  clike: (0, _createLanguageAsyncLoader.default)("clike", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/clike.js");
    });
  }),
  clojure: (0, _createLanguageAsyncLoader.default)("clojure", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/clojure.js");
    });
  }),
  coffeescript: (0, _createLanguageAsyncLoader.default)("coffeescript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/coffeescript.js");
    });
  }),
  cpp: (0, _createLanguageAsyncLoader.default)("cpp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/cpp.js");
    });
  }),
  crystal: (0, _createLanguageAsyncLoader.default)("crystal", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/crystal.js");
    });
  }),
  csharp: (0, _createLanguageAsyncLoader.default)("csharp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/csharp.js");
    });
  }),
  csp: (0, _createLanguageAsyncLoader.default)("csp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/csp.js");
    });
  }),
  cssExtras: (0, _createLanguageAsyncLoader.default)("cssExtras", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/css-extras.js");
    });
  }),
  css: (0, _createLanguageAsyncLoader.default)("css", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/css.js");
    });
  }),
  d: (0, _createLanguageAsyncLoader.default)("d", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/d.js");
    });
  }),
  dart: (0, _createLanguageAsyncLoader.default)("dart", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/dart.js");
    });
  }),
  diff: (0, _createLanguageAsyncLoader.default)("diff", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/diff.js");
    });
  }),
  django: (0, _createLanguageAsyncLoader.default)("django", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/django.js");
    });
  }),
  docker: (0, _createLanguageAsyncLoader.default)("docker", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/docker.js");
    });
  }),
  eiffel: (0, _createLanguageAsyncLoader.default)("eiffel", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/eiffel.js");
    });
  }),
  elixir: (0, _createLanguageAsyncLoader.default)("elixir", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/elixir.js");
    });
  }),
  elm: (0, _createLanguageAsyncLoader.default)("elm", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/elm.js");
    });
  }),
  erb: (0, _createLanguageAsyncLoader.default)("erb", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/erb.js");
    });
  }),
  erlang: (0, _createLanguageAsyncLoader.default)("erlang", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/erlang.js");
    });
  }),
  flow: (0, _createLanguageAsyncLoader.default)("flow", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/flow.js");
    });
  }),
  fortran: (0, _createLanguageAsyncLoader.default)("fortran", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/fortran.js");
    });
  }),
  fsharp: (0, _createLanguageAsyncLoader.default)("fsharp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/fsharp.js");
    });
  }),
  gedcom: (0, _createLanguageAsyncLoader.default)("gedcom", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/gedcom.js");
    });
  }),
  gherkin: (0, _createLanguageAsyncLoader.default)("gherkin", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/gherkin.js");
    });
  }),
  git: (0, _createLanguageAsyncLoader.default)("git", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/git.js");
    });
  }),
  glsl: (0, _createLanguageAsyncLoader.default)("glsl", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/glsl.js");
    });
  }),
  go: (0, _createLanguageAsyncLoader.default)("go", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/go.js");
    });
  }),
  graphql: (0, _createLanguageAsyncLoader.default)("graphql", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/graphql.js");
    });
  }),
  groovy: (0, _createLanguageAsyncLoader.default)("groovy", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/groovy.js");
    });
  }),
  haml: (0, _createLanguageAsyncLoader.default)("haml", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/haml.js");
    });
  }),
  handlebars: (0, _createLanguageAsyncLoader.default)("handlebars", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/handlebars.js");
    });
  }),
  haskell: (0, _createLanguageAsyncLoader.default)("haskell", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/haskell.js");
    });
  }),
  haxe: (0, _createLanguageAsyncLoader.default)("haxe", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/haxe.js");
    });
  }),
  hpkp: (0, _createLanguageAsyncLoader.default)("hpkp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/hpkp.js");
    });
  }),
  hsts: (0, _createLanguageAsyncLoader.default)("hsts", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/hsts.js");
    });
  }),
  http: (0, _createLanguageAsyncLoader.default)("http", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/http.js");
    });
  }),
  ichigojam: (0, _createLanguageAsyncLoader.default)("ichigojam", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/ichigojam.js");
    });
  }),
  icon: (0, _createLanguageAsyncLoader.default)("icon", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/icon.js");
    });
  }),
  inform7: (0, _createLanguageAsyncLoader.default)("inform7", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/inform7.js");
    });
  }),
  ini: (0, _createLanguageAsyncLoader.default)("ini", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/ini.js");
    });
  }),
  io: (0, _createLanguageAsyncLoader.default)("io", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/io.js");
    });
  }),
  j: (0, _createLanguageAsyncLoader.default)("j", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/j.js");
    });
  }),
  java: (0, _createLanguageAsyncLoader.default)("java", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/java.js");
    });
  }),
  javascript: (0, _createLanguageAsyncLoader.default)("javascript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/javascript.js");
    });
  }),
  jolie: (0, _createLanguageAsyncLoader.default)("jolie", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/jolie.js");
    });
  }),
  json: (0, _createLanguageAsyncLoader.default)("json", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/json.js");
    });
  }),
  jsx: (0, _createLanguageAsyncLoader.default)("jsx", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/jsx.js");
    });
  }),
  julia: (0, _createLanguageAsyncLoader.default)("julia", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/julia.js");
    });
  }),
  keyman: (0, _createLanguageAsyncLoader.default)("keyman", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/keyman.js");
    });
  }),
  kotlin: (0, _createLanguageAsyncLoader.default)("kotlin", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/kotlin.js");
    });
  }),
  latex: (0, _createLanguageAsyncLoader.default)("latex", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/latex.js");
    });
  }),
  less: (0, _createLanguageAsyncLoader.default)("less", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/less.js");
    });
  }),
  liquid: (0, _createLanguageAsyncLoader.default)("liquid", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/liquid.js");
    });
  }),
  lisp: (0, _createLanguageAsyncLoader.default)("lisp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/lisp.js");
    });
  }),
  livescript: (0, _createLanguageAsyncLoader.default)("livescript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/livescript.js");
    });
  }),
  lolcode: (0, _createLanguageAsyncLoader.default)("lolcode", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/lolcode.js");
    });
  }),
  lua: (0, _createLanguageAsyncLoader.default)("lua", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/lua.js");
    });
  }),
  makefile: (0, _createLanguageAsyncLoader.default)("makefile", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/makefile.js");
    });
  }),
  markdown: (0, _createLanguageAsyncLoader.default)("markdown", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/markdown.js");
    });
  }),
  markupTemplating: (0, _createLanguageAsyncLoader.default)("markupTemplating", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/markup-templating.js");
    });
  }),
  markup: (0, _createLanguageAsyncLoader.default)("markup", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/markup.js");
    });
  }),
  matlab: (0, _createLanguageAsyncLoader.default)("matlab", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/matlab.js");
    });
  }),
  mel: (0, _createLanguageAsyncLoader.default)("mel", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/mel.js");
    });
  }),
  mizar: (0, _createLanguageAsyncLoader.default)("mizar", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/mizar.js");
    });
  }),
  monkey: (0, _createLanguageAsyncLoader.default)("monkey", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/monkey.js");
    });
  }),
  n4js: (0, _createLanguageAsyncLoader.default)("n4js", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/n4js.js");
    });
  }),
  nasm: (0, _createLanguageAsyncLoader.default)("nasm", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/nasm.js");
    });
  }),
  nginx: (0, _createLanguageAsyncLoader.default)("nginx", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/nginx.js");
    });
  }),
  nim: (0, _createLanguageAsyncLoader.default)("nim", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/nim.js");
    });
  }),
  nix: (0, _createLanguageAsyncLoader.default)("nix", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/nix.js");
    });
  }),
  nsis: (0, _createLanguageAsyncLoader.default)("nsis", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/nsis.js");
    });
  }),
  objectivec: (0, _createLanguageAsyncLoader.default)("objectivec", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/objectivec.js");
    });
  }),
  ocaml: (0, _createLanguageAsyncLoader.default)("ocaml", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/ocaml.js");
    });
  }),
  opencl: (0, _createLanguageAsyncLoader.default)("opencl", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/opencl.js");
    });
  }),
  oz: (0, _createLanguageAsyncLoader.default)("oz", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/oz.js");
    });
  }),
  parigp: (0, _createLanguageAsyncLoader.default)("parigp", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/parigp.js");
    });
  }),
  parser: (0, _createLanguageAsyncLoader.default)("parser", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/parser.js");
    });
  }),
  pascal: (0, _createLanguageAsyncLoader.default)("pascal", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/pascal.js");
    });
  }),
  perl: (0, _createLanguageAsyncLoader.default)("perl", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/perl.js");
    });
  }),
  phpExtras: (0, _createLanguageAsyncLoader.default)("phpExtras", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/php-extras.js");
    });
  }),
  php: (0, _createLanguageAsyncLoader.default)("php", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/php.js");
    });
  }),
  plsql: (0, _createLanguageAsyncLoader.default)("plsql", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/plsql.js");
    });
  }),
  powershell: (0, _createLanguageAsyncLoader.default)("powershell", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/powershell.js");
    });
  }),
  processing: (0, _createLanguageAsyncLoader.default)("processing", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/processing.js");
    });
  }),
  prolog: (0, _createLanguageAsyncLoader.default)("prolog", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/prolog.js");
    });
  }),
  properties: (0, _createLanguageAsyncLoader.default)("properties", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/properties.js");
    });
  }),
  protobuf: (0, _createLanguageAsyncLoader.default)("protobuf", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/protobuf.js");
    });
  }),
  pug: (0, _createLanguageAsyncLoader.default)("pug", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/pug.js");
    });
  }),
  puppet: (0, _createLanguageAsyncLoader.default)("puppet", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/puppet.js");
    });
  }),
  pure: (0, _createLanguageAsyncLoader.default)("pure", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/pure.js");
    });
  }),
  python: (0, _createLanguageAsyncLoader.default)("python", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/python.js");
    });
  }),
  q: (0, _createLanguageAsyncLoader.default)("q", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/q.js");
    });
  }),
  qore: (0, _createLanguageAsyncLoader.default)("qore", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/qore.js");
    });
  }),
  r: (0, _createLanguageAsyncLoader.default)("r", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/r.js");
    });
  }),
  reason: (0, _createLanguageAsyncLoader.default)("reason", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/reason.js");
    });
  }),
  renpy: (0, _createLanguageAsyncLoader.default)("renpy", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/renpy.js");
    });
  }),
  rest: (0, _createLanguageAsyncLoader.default)("rest", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/rest.js");
    });
  }),
  rip: (0, _createLanguageAsyncLoader.default)("rip", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/rip.js");
    });
  }),
  roboconf: (0, _createLanguageAsyncLoader.default)("roboconf", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/roboconf.js");
    });
  }),
  ruby: (0, _createLanguageAsyncLoader.default)("ruby", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/ruby.js");
    });
  }),
  rust: (0, _createLanguageAsyncLoader.default)("rust", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/rust.js");
    });
  }),
  sas: (0, _createLanguageAsyncLoader.default)("sas", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/sas.js");
    });
  }),
  sass: (0, _createLanguageAsyncLoader.default)("sass", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/sass.js");
    });
  }),
  scala: (0, _createLanguageAsyncLoader.default)("scala", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/scala.js");
    });
  }),
  scheme: (0, _createLanguageAsyncLoader.default)("scheme", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/scheme.js");
    });
  }),
  scss: (0, _createLanguageAsyncLoader.default)("scss", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/scss.js");
    });
  }),
  smalltalk: (0, _createLanguageAsyncLoader.default)("smalltalk", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/smalltalk.js");
    });
  }),
  smarty: (0, _createLanguageAsyncLoader.default)("smarty", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/smarty.js");
    });
  }),
  soy: (0, _createLanguageAsyncLoader.default)("soy", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/soy.js");
    });
  }),
  sql: (0, _createLanguageAsyncLoader.default)("sql", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/sql.js");
    });
  }),
  stylus: (0, _createLanguageAsyncLoader.default)("stylus", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/stylus.js");
    });
  }),
  swift: (0, _createLanguageAsyncLoader.default)("swift", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/swift.js");
    });
  }),
  tap: (0, _createLanguageAsyncLoader.default)("tap", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/tap.js");
    });
  }),
  tcl: (0, _createLanguageAsyncLoader.default)("tcl", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/tcl.js");
    });
  }),
  textile: (0, _createLanguageAsyncLoader.default)("textile", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/textile.js");
    });
  }),
  tsx: (0, _createLanguageAsyncLoader.default)("tsx", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/tsx.js");
    });
  }),
  tt2: (0, _createLanguageAsyncLoader.default)("tt2", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/tt2.js");
    });
  }),
  twig: (0, _createLanguageAsyncLoader.default)("twig", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/twig.js");
    });
  }),
  typescript: (0, _createLanguageAsyncLoader.default)("typescript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/typescript.js");
    });
  }),
  vbnet: (0, _createLanguageAsyncLoader.default)("vbnet", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/vbnet.js");
    });
  }),
  velocity: (0, _createLanguageAsyncLoader.default)("velocity", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/velocity.js");
    });
  }),
  verilog: (0, _createLanguageAsyncLoader.default)("verilog", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/verilog.js");
    });
  }),
  vhdl: (0, _createLanguageAsyncLoader.default)("vhdl", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/vhdl.js");
    });
  }),
  vim: (0, _createLanguageAsyncLoader.default)("vim", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/vim.js");
    });
  }),
  visualBasic: (0, _createLanguageAsyncLoader.default)("visualBasic", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/visual-basic.js");
    });
  }),
  wasm: (0, _createLanguageAsyncLoader.default)("wasm", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/wasm.js");
    });
  }),
  wiki: (0, _createLanguageAsyncLoader.default)("wiki", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/wiki.js");
    });
  }),
  xeora: (0, _createLanguageAsyncLoader.default)("xeora", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/xeora.js");
    });
  }),
  xojo: (0, _createLanguageAsyncLoader.default)("xojo", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/xojo.js");
    });
  }),
  xquery: (0, _createLanguageAsyncLoader.default)("xquery", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/xquery.js");
    });
  }),
  yaml: (0, _createLanguageAsyncLoader.default)("yaml", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/yaml.js");
    });
  })
};
exports.default = _default;