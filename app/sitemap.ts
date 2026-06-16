import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { policySlugs } from "@/lib/policies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const routes = ["", "/about", "/programs", "/gallery", "/admissions", "/contact", "/policies"];
  const policyRoutes = policySlugs.map((s) => `/policies/${s}`);

  return [...routes, ...policyRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/policies/") ? 0.4 : 0.8,
  }));
}
