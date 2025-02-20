import { expect, Page, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

let page: Page;
let homePage: HomePage;

test.describe('Home Page Tests', () => {

    test("Verify the header is displayed", async ({ page }) => {
        homePage = new HomePage()
        await page.goto('/');
        await expect(homePage.header).toBeVisible()
    })
})
