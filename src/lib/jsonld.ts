import { getCollection } from 'astro:content';

/** Publications as schema.org ScholarlyArticle items, for the single page JSON-LD. */
export async function publicationsJsonLd() {
  const pubs = (await getCollection('publications')).sort((a, b) => a.data.order - b.data.order).filter((p) => p.data.group !== 'ip');
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CELOS Lab publications',
    itemListElement: pubs.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'ScholarlyArticle',
        headline: p.data.title,
        author: p.data.authors,
        datePublished: String(p.data.year),
        isPartOf: p.data.venue,
      },
    })),
  };
}
