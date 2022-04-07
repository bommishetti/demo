// webpack.config.js
const JavaScriptObfuscator = require("webpack-obfuscator");
module.exports = (config, options) => {
  if (config.mode === "production") {
    config.plugins.push(
      new JavaScriptObfuscator(
        {
          rotateStringArray: true, // please customizable with options
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          debugProtection: false,
          // debugProtectionInterval: false,
          disableConsoleOutput: true,
          identifierNamesGenerator: "hexadecimal",
          log: false,
          renameGlobals: false,
          selfDefending: true,
          shuffleStringArray: true,
          splitStrings: false,
          stringArray: true,
          // stringArrayEncoding: false,
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: false,
        },
        ["exclude_bundle.js"]
      )
    );
  }
};
