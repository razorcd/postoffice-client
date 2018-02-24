import { AppPage } from './app.po';

describe('postbox-client App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display main page message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('API Inspector');
  });
});
