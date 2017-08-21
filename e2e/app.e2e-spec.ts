import { FirebasetutorialPage } from './app.po';

describe('firebasetutorial App', () => {
  let page: FirebasetutorialPage;

  beforeEach(() => {
    page = new FirebasetutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
