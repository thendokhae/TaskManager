import { TaskManagerUIPage } from './app.po';

describe('task-manager-ui App', function() {
  let page: TaskManagerUIPage;

  beforeEach(() => {
    page = new TaskManagerUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
