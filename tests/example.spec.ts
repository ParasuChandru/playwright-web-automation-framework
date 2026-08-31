import { test, expect } from '@fixtures/testFixtures';
import { testData } from '@utils/testData';

test.describe('Example application', () => {
  test('should load the home page @smoke', async ({ homePage }) => {
    await homePage.open();
    await homePage.verifyPageLoaded();
    await expect(homePage.heading).toHaveText(testData.exampleDomain.heading);
  });

  test('should navigate to more information page', async ({ homePage, page }) => {
    await homePage.open();
    await homePage.clickMoreInformation();
    await expect(page).toHaveURL(/iana\.org/);
  });
});
