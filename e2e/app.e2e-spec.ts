import { NgxTranslateSamplePage } from './app.po';

describe('ngx-translate-sample App', () => {
  let page: NgxTranslateSamplePage;

  beforeEach(() => {
    page = new NgxTranslateSamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
