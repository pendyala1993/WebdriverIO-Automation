import { browser } from '@wdio/globals'
import testdata from '../resources/preprod_TestData.json';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public openApplication (endpoint: string) {
        return browser.url(endpoint)
    }
}

