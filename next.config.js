const securityHeaders = [
  {
    key: "cache-control",
    value: "public, max-age=0, must-revalidate",
  },
];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["simpl.info", "citilab.ru", "thumb.tildacdn.com"],
    formats: ["image/webp"],
    minimumCacheTTL: 6000000,
  },
  experimental: { images: { allowFutureImage: true } },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
