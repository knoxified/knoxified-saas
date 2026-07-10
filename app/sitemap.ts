import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://knoxified.org';

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/pricing`, lastModified: new Date() },
    { url: `${base}/systems`, lastModified: new Date() },
    { url: `${base}/automations`, lastModified: new Date() },
    { url: `${base}/get-started`, lastModified: new Date() },
    { url: `${base}/create-account`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/legal/privacy`, lastModified: new Date() },
    { url: `${base}/legal/refunds`, lastModified: new Date() },
    { url: `${base}/legal/terms`, lastModified: new Date() },
    { url: `${base}/legal/acceptable-use`, lastModified: new Date() },
    { url: `${base}/legal/compliance`, lastModified: new Date() },
    { url: `${base}/legal/ai-calling-guide`, lastModified: new Date() },
  ];
}
