import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('EuroJackpot');
  });

  it('should have a play route', () => {
    expect(sut.router.routes).toContain({ route: 'play', name: 'play',  moduleId: 'play', nav: true, title: 'Play EuroJackpot' });
  });

  it('should have a results route', () => {
    expect(sut.router.routes).toContain({ route: ['', 'results'], name: 'results', moduleId: 'results', nav: true, title: 'EuroJackpot Results & Prize Breakdown' });
  });

  it('should have a help route', () => {
    expect(sut.router.routes).toContain({ route: 'help', name: 'help', moduleId: 'help', nav: true, title: 'EuroJackpot Help & FAQ' });
  });
});
