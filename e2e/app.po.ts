import { browser, by, element, $$ } from 'protractor';
import {ElementArrayFinder, ElementFinder} from "protractor/built/element";
import { promise, WebElement, WebElementPromise } from 'selenium-webdriver';

export class AppPage {
  navigateTo():promise.Promise<any> {
    return browser.get('/');
  }

  getAppTitleText():promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  getIncomingRequests():promise.Promise<WebElement[]> {
    return $$("incoming-request").getWebElements();
  }
}
