var rewire = require("rewire");

let defaults = rewire("react-scripts/scripts/build.js");
let config = defaults.__get__("config");
config.output.publicPath = "./";