var path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    library: "motionUX",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist")
  }
};
