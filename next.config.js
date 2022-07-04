module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["simpl.info", "citilab.ru"],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: { images: { allowFutureImage: true } },
};
