import { expect, Locator, Page } from '@playwright/test';
import { env } from '@utils/env';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.page.setDefaultTimeout(env.defaultTimeout);
  }

  async navigate(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async verifyUrlContains(value: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(value));
  }
}
