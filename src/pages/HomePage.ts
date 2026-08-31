import { expect, Page } from '@playwright/test';
import { BasePage } from '@pages/BasePage';

export class HomePage extends BasePage {
  readonly heading;
  readonly description;
  readonly moreInformationLink;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: /example domain/i });
    this.description = page.locator('div > p').first();
    this.moreInformationLink = page.getByRole('link', { name: /more information/i });
  }

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
    await expect(this.description).toBeVisible();
    await expect(this.moreInformationLink).toBeVisible();
  }

  async clickMoreInformation(): Promise<void> {
    await this.moreInformationLink.click();
  }
}
