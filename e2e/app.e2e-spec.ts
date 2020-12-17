import { JoraCreditV2Page } from './app.po';

describe('jora-credit-v2 App', () => {
  let page: JoraCreditV2Page;

  beforeEach(() => {
    page = new JoraCreditV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
