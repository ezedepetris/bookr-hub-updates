import { MetadataRoute } from "next";

const BASE_URL = "https://updates.bookrhub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updates = [
    {
      slug: "launch-new-booking-calendar",
      date: "2026-03-23",
      title: "Launch: New Booking Calendar with Real-Time Availability",
    },
    {
      slug: "whatsapp-reminders-2-0",
      date: "2026-03-15",
      title: "WhatsApp Reminders 2.0: Custom Messages & Multi-Language Support",
    },
    {
      slug: "multi-location-support",
      date: "2026-03-08",
      title: "Multi-Location Support for Growing Businesses",
    },
    {
      slug: "online-payments-launch",
      date: "2026-02-28",
      title: "Online Payments Now Available in Latin America",
    },
    {
      slug: "new-dashboard-analytics",
      date: "2026-02-15",
      title: "New Dashboard: Advanced Analytics & Revenue Tracking",
    },
  ];

  const staticPages = [
    {
      url: BASE_URL,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
  ];

  const updatePages = updates.map((update) => ({
    url: `${BASE_URL}/${update.slug}`,
    lastModified: new Date(update.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...updatePages];
}
