import { PrerenderConfig } from "@stencil/core/internal";

export const config: PrerenderConfig = {
  hydrateOptions(url) {
    return {
      excludeComponents: ["sc-card"],
    };
  },
};
