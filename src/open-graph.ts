export type OpenGraphPageKind = "website" | "article";

type OpenGraphPageData = {
  url: string;
  slug: string;
  title: string;
  description: string;
  kind: OpenGraphPageKind;
};

export class OpenGraphPage {
  constructor(private data: OpenGraphPageData) {}

  absoluteImageUrl(site: URL): string {
    return new URL(`/open-graph/${this.data.slug}.png`, site).href;
  }

  absoluteUrl(site: URL): string {
    return new URL(this.data.url, site).href;
  }

  get url(): string {
    return this.data.url;
  }

  get slug(): string {
    return this.data.slug;
  }

  get title(): string {
    return this.data.title;
  }

  get description(): string {
    return this.data.description;
  }

  get kind(): OpenGraphPageKind {
    return this.data.kind;
  }
}

const pageData: OpenGraphPageData[] = [];

const pages: OpenGraphPage[] = pageData.map((page) => new OpenGraphPage(page));

export const pagesByUrl = Object.fromEntries(
  pages.map((page) => [page.url, page]),
);

export const pagesBySlug = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
);

export function getPageByUrl(url: string): OpenGraphPage | undefined {
  const pageWithSlash = pagesByUrl[url];
  if (pageWithSlash) {
    return pageWithSlash;
  }

  const pageWithoutTrailingSlash = pagesByUrl[url.replace(/\/$/, "")];
  if (pageWithoutTrailingSlash) {
    return pageWithoutTrailingSlash;
  }

  return undefined;
}
