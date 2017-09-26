import { EducationSystemPage } from './app.po';

describe('education-system App', () => {
  let page: EducationSystemPage;

  beforeEach(() => {
    page = new EducationSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
