export function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use correct path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use Vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}
