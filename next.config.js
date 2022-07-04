module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["simpl.info", "citilab.ru", "thumb.tildacdn.com"],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: { images: { allowFutureImage: true } },
};
