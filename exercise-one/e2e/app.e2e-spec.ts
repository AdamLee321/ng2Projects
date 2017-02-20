import { ExerciseOnePage } from './app.po';

describe('exercise-one App', function() {
  let page: ExerciseOnePage;

  beforeEach(() => {
    page = new ExerciseOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
