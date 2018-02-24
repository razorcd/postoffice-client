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

  describe('incoming-request elements', () => {
    it('should be present', (done) => {
      page.navigateTo();

      page.getIncomingRequestElements().then((elements: WebElement[]) => {
        expect(elements.length).toBe(2);
        done();
      });
    });

    describe( 'header element', () => {
      it('should have header element with method', () => {
        page.navigateTo();
        expect(page.getIncomingRequestElementHeaderMethodText()).toEqual("GET");
      });

      it('should have header element with url', () => {
        page.navigateTo();
        expect(page.getIncomingRequestElementHeaderUrlText()).toEqual("http://localhost:8080/incoming/fgdfgf");
      });

      it('should have header element with humanized timestamp', () => {
        page.navigateTo();
        expect(page.getIncomingRequestElementHeaderTimestampText()).toContain("ago");
      });
    });

    describe('details element', () => {
      it('should have hidden details element', () => {
        page.navigateTo();
        expect(page.getIncomingRequestElementDetailsVisible()).toEqual(false);
      });

      it('should show details when header is clicked', (done) => {
        page.navigateTo();
        page.clickIncomingRequestElementHeader().then(() => {
          expect(page.getIncomingRequestElementDetailsVisible()).toEqual(true);
          expect(page.getIncomingRequestElementDetailsText()).toContain("5a8f2932f50dd07ef4f19c52");
          done();
        });
      });
    });

  });





});
