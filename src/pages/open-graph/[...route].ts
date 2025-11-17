import { OGImageRoute } from "astro-og-canvas";
import { pagesBySlug } from "../../open-graph";

type RgbColorTuple = [number, number, number];

const white: RgbColorTuple = [255, 255, 255];

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",

  pages: pagesBySlug,

  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    padding: 60,
    bgGradient: [white],
    fonts: [
      "https://cdn.jsdelivr.net/fontsource/fonts/open-sans:vf@latest/latin-wght-normal.woff2",
    ],
    font: {
      title: {
        color: white,
        weight: "SemiBold",
        size: 75,
        families: ["Open Sans"],
      },
      description: {
        color: white,
        weight: "ExtraLight",
        size: 40,
        families: ["Open Sans"],
      },
    },
  }),
});
