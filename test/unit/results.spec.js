import { Results } from '../../src/results';

class HttpStub {
  fetch(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ json: () => response });
    });
  }

  configure(func) {
  }
}

describe('the Results module', () => {
  it('sets fetch response to jackpot data', (done) => {
    var http = new HttpStub();
    var sut = new Results(http);
    var itemStubs = [1];
    var itemFake = [2];

    http.itemStub = itemStubs;
    sut.activate().then(() => {
      expect(sut.data).toBe(itemStubs);
      expect(sut.data).not.toBe(itemFake);
      done();
    });
  });
});
