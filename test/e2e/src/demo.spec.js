import {PageObjectSkeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  let poWelcome;
  let poSkeleton;

  beforeEach(() => {
    poSkeleton = new PageObjectSkeleton();

    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  it('should load the page and display the initial page title', () => {
    expect(poSkeleton.getCurrentPageTitle()).toBe('EuroJackpot Results & Prize Breakdown | EuroJackpot');
  });


  it('should navigate to play page', () => {
    poSkeleton.navigateTo('#/play');
    expect(poSkeleton.getCurrentPageTitle()).toBe('Play EuroJackpot | EuroJackpot');
  });

  it('should navigate to help page', () => {
    poSkeleton.navigateTo('#/help');
    expect(poSkeleton.getCurrentPageTitle()).toBe('EuroJackpot Help & FAQ | EuroJackpot');
  });

  it('should navigate to results page', () => {
    poSkeleton.navigateTo('#/results');
    expect(poSkeleton.getCurrentPageTitle()).toBe('EuroJackpot Results & Prize Breakdown | EuroJackpot');
  });
});
