const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        targets: "> 0.25%, not dead"
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-react-jsx"]
};

module.exports = config;
