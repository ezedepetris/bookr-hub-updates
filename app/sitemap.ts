import { MetadataRoute } from "next";
import { getUpdates } from "./lib/dictionary";

const BASE_URL = "https://updates.bookrhub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatesEn = getUpdates("en");
  const updatesList = Object.entries(updatesEn).map(([slug, data]) => ({
    slug,
    date: data.date,
  }));

  const staticPages = [
    {
      url: BASE_URL,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
  ];

  const updatePages = updatesList.map((update) => ({
    url: `${BASE_URL}/${update.slug}`,
    lastModified: new Date(update.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...updatePages];
}
