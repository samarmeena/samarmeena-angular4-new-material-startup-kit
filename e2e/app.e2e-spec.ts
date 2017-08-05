import { SamarmeenaAngular4NewmaterialStatupKitPage } from './app.po';

describe('samarmeena-angular4-newmaterial-statup-kit App', () => {
  let page: SamarmeenaAngular4NewmaterialStatupKitPage;

  beforeEach(() => {
    page = new SamarmeenaAngular4NewmaterialStatupKitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
