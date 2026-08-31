export const env = {
  baseUrl: process.env.BASE_URL || 'https://example.com',
  headless: process.env.HEADLESS ? process.env.HEADLESS.toLowerCase() === 'true' : true,
  browser: process.env.BROWSER || 'chromium',
  defaultTimeout: Number(process.env.DEFAULT_TIMEOUT || 10000),
};
