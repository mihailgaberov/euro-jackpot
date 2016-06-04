export class App {
  configureRouter(config, router) {
    config.title = 'EuroJackpot';
    config.map([
      { route: 'play',          name: 'play',    moduleId: 'play',    nav: true, title: 'Play EuroJackpot' },
      { route: ['', 'results'], name: 'results', moduleId: 'results', nav: true, title: 'EuroJackpot Results & Prize Breakdown' },
      { route: 'help',          name: 'help',    moduleId: 'help',    nav: true, title: 'EuroJackpot Help & FAQ' }
    ]);

    this.router = router;
  }
}
