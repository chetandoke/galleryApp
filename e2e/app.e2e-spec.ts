import { GallaryAppPage } from './app.po';

describe('gallary-app App', () => {
  let page: GallaryAppPage;

  beforeEach(() => {
    page = new GallaryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
