import { Locator, Page} from "@playwright/test";

export class HomePage {
    
    page: Page

    constructor() {
        this.header = this.page.locator('css=#header')
    }

    readonly header: Locator;

}