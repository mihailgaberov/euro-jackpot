import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Results {
  heading = 'EuroJackpot Results & Winning Numbers';
  data = [];
  odds = [];


  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('data.json')
      .then(response =>
        response.json()
      ).then(data => {
        this.data = data;
        const odds = data.last.odds;
        for (var p in odds) {
          if (odds.hasOwnProperty(p)) {
            this.odds.push(odds[p]);
          }
        }
        this.sortOddsByPrize();
      });
  }

  sortOddsByPrize() {
    this.odds.sort(function (a, b) {
      if (a.prize > b.prize) {
        return 1;
      }
      if (a.prize < b.prize) {
        return -1;
      }
      return 0;
    }).reverse();

    console.log(this.odds);
  }
}
