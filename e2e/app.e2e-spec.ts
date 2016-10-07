import { SeveHomePage } from './app.po';

describe('seve-home App', function() {
  let page: SeveHomePage;

  beforeEach(() => {
    page = new SeveHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
