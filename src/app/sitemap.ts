import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://injazatcapitals.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/investment-strategy`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/investor-relations`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/partner`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-use`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
