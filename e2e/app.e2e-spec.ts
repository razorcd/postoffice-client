import { AppPage } from './app.po';
import {WebElement} from "selenium-webdriver";

describe('postbox-client App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display main page message', () => {
    page.navigateTo();
    expect(page.getAppTitleText()).toEqual('API Inspector');
  });

  it('should have incoming-request elements', (done) => {
    page.navigateTo();
    page.getIncomingRequests().then((elements:WebElement[]) => {
      expect(elements.length).toBe(2);
      done();
    })
  });




});
