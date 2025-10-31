import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [postcssImport, postcssNested, autoprefixer, cssnano, postcssPresetEnv],
};
