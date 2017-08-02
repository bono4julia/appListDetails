import { AppListDetailPage } from './app.po';

describe('app-list-detail App', () => {
  let page: AppListDetailPage;

  beforeEach(() => {
    page = new AppListDetailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
