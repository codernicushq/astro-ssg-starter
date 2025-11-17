import type { ImageMetadata } from "astro";

const decapImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpeg,jpg,png,gif,webp}",
);

const decapSvgs = import.meta.glob<{ default: string }>(
  "/src/assets/images/*.svg",
  { query: "raw" },
);

const Assets = {
  async getImage(relativePath: string) {
    return (await decapImages["/" + relativePath])();
  },
  async getSvg(relativePath: string) {
    const value = (await decapSvgs["/" + relativePath])();

    const svg = value.default;

    return svg;
  },
};

export default Assets;
