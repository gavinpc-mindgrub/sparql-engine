import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "dist-modules/api.js",
  output: {
    name: "sparql_engine",
    file: "dist-umd/sparql-engine.js",
    format: "umd",
  },
  external: [
    "crypto",
    "stream",
    // referenced by (at least) SparqlParser
    "fs",
    "path",
    // referenced by (at least) avltree
    "util",
  ],
  plugins: [commonjs(), resolve({ preferBuiltins: false })],
};
