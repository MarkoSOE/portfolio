import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // Cache Components hangs requests on Cloudflare Workers (OpenNext), so it stays off.
};

export default nextConfig;

// Gives `next dev` access to Cloudflare bindings.
initOpenNextCloudflareForDev();
