import { NutritionixAPITestPage } from './app.po';

describe('nutritionix-apitest App', () => {
  let page: NutritionixAPITestPage;

  beforeEach(() => {
    page = new NutritionixAPITestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
