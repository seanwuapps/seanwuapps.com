import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://seanwuapps.com/",
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/variables.scss"],
    }),
    postcss({
      plugins: [
        autoprefixer(),
        pxtorem({
          propList: ["*"],
          selectorBlackList: [":root", "html", ".container"],
          replace: false,
        }),
      ],
    }),
  ],
};
