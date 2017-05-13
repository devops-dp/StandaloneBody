import { StandaloneBodyPage } from './app.po';

describe('standalone-body App', () => {
  let page: StandaloneBodyPage;

  beforeEach(() => {
    page = new StandaloneBodyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
