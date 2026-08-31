import { test, expect } from '@playwright/test';

test.describe('Application health checks', () => {
  test('should return a successful response for the base URL', async ({ request, baseURL }) => {
    const response = await request.get(baseURL || 'https://example.com');
    expect(response.ok()).toBeTruthy();
  });
});
