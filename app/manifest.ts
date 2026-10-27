import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acctx — Private, Offline-First Personal Finance",
    short_name: "Acctx",
    description: "100% offline desktop personal finance and smart bill manager with local AES-256 encryption.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0f",
    theme_color: "#090a0f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
