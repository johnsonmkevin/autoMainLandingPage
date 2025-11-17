import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [postcssImport, autoprefixer, cssnano, postcssPresetEnv({ stage: 1 })],
};
