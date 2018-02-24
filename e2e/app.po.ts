import {browser, by, element, $$, $} from 'protractor';
import {ElementArrayFinder, ElementFinder} from "protractor/built/element";
import { promise, WebElement, WebElementPromise } from 'selenium-webdriver';

export class AppPage {
  navigateTo():promise.Promise<any> {
    return browser.get('/');
  }

  getAppTitleText():promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  getIncomingRequestElements():promise.Promise<WebElement[]> {
    return $$("incoming-request").getWebElements();
  }

  getIncomingRequestElementHeaderMethodText():promise.Promise<string> {
    return $("incoming-request incoming-request-header .incoming-request-header-method").getWebElement().getText();
  }

  getIncomingRequestElementHeaderUrlText():promise.Promise<string> {
    return $("incoming-request incoming-request-header .incoming-request-header-url").getWebElement().getText();
  }

  getIncomingRequestElementHeaderTimestampText():promise.Promise<string> {
    return $("incoming-request incoming-request-header .incoming-request-header-timestamp").getWebElement().getText();
  }

  getIncomingRequestElementDetailsVisible():promise.Promise<boolean> {
    return $("incoming-request .incoming-request-details").isPresent();
  }

  getIncomingRequestElementDetailsText():promise.Promise<string> {
    return $("incoming-request .incoming-request-details").getWebElement().getText();
  }

  clickIncomingRequestElementHeader():promise.Promise<void> {
    return $("incoming-request incoming-request-header").click();
  }
}
