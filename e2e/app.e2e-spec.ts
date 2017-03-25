import { ProvaAngularPage } from './app.po';

describe('prova-angular App', () => {
  let page: ProvaAngularPage;

  beforeEach(() => {
    page = new ProvaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
