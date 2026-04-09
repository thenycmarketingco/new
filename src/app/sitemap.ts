import type { MetadataRoute } from "next";
import { serviceCategories, areas, industries } from "@/lib/siteData";

const BASE = "https://www.thenycmarketingcompany.com";

// Max 41 industries per sitemap → 41 × 15 × 81 = 49,815 URLs (under 50k limit)
const CHUNK = 41;

/**
 * 4 sitemaps (all under 50k URLs):
 *  /sitemap/0.xml — static, services, areas, industry index, blog
 *  /sitemap/1.xml — programmatic industries 0–40  (49,815 URLs)
 *  /sitemap/2.xml — programmatic industries 41–81 (49,815 URLs)
 *  /sitemap/3.xml — programmatic industries 82–104 (27,945 URLs)
 */
export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap(props: { id: number }): Promise<MetadataRoute.Sitemap> {
  // Next.js 16 passes params as Promise — id is actually Promise<number>
  const id = Number(await (props.id as unknown as Promise<number>));
  const now = new Date().toISOString();
  // Fixed date for programmatic pages — prevents crawlers from re-crawling 127K pages
  // Update this date only when you actually change the page template
  const programmaticDate = "2026-03-12T00:00:00.000Z";

  if (id === 0) {
    const staticPages: MetadataRoute.Sitemap = [
      { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
      { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
      { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${BASE}/results`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/nyc-web-design-pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/industries-we-offer-marketing-services-for`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE}/services-areas-we-offer-marketing-services-in`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${BASE}/artificial-intelligence-marketing-services-offered`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${BASE}/the-free-human+ai-seo-marketing-review`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${BASE}/annual-marketing-spend-roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/nyc-marketing-pricing-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/nyc-marketing-company-faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/nyc-marketing-company-services-list`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/nyc-marketing-company-portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/nyc-marketing-101-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${BASE}/master-marketing-checklist-last-updated-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: `${BASE}/whats-working-in-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
      { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ];

    const servicePages: MetadataRoute.Sitemap = serviceCategories.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    const serviceAreaPages: MetadataRoute.Sitemap = serviceCategories.flatMap((s) =>
      areas.map((a) => ({
        url: `${BASE}/services/${s.slug}/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    );

    const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
      url: `${BASE}/services-areas-we-offer-marketing-services-in/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
      url: `${BASE}/industries-we-offer-marketing-services-for/${i.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    const blogPages: MetadataRoute.Sitemap = [
      { url: `${BASE}/the-marketing-blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
      { url: `${BASE}/the-marketing-blog/how-to-choose-digital-marketing-agency`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
      { url: `${BASE}/the-marketing-blog/local-seo-vs-national-seo`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
      { url: `${BASE}/the-marketing-blog/10-seo-mistakes-nyc-businesses-2026`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    ];

    return [
      ...staticPages,
      ...servicePages,
      ...serviceAreaPages,
      ...areaPages,
      ...industryPages,
      ...blogPages,
    ];
  }

  const start = (id - 1) * CHUNK;
  const end = Math.min(start + CHUNK, industries.length);
  const chunk = industries.slice(start, end);

  return chunk.flatMap((i) =>
    serviceCategories.flatMap((s) =>
      areas.map((a) => ({
        url: `${BASE}/industries-we-offer-marketing-services-for/${i.slug}/${s.slug}/${a.slug}`,
        lastModified: programmaticDate,
        changeFrequency: "yearly" as const,
        priority: 0.5,
      }))
    )
  );
}
