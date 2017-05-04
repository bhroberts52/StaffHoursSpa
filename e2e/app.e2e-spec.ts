import { StaffHoursSpaPage } from './app.po';

describe('staff-hours-spa App', () => {
  let page: StaffHoursSpaPage;

  beforeEach(() => {
    page = new StaffHoursSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
