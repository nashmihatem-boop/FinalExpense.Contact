import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FinalExpense.Contact",
    short_name: "FinalExpense.Contact",
    description: "Get final expense life insurance quotes fast and compare your options side by side.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#123f2a",
    icons: [{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
