import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Results {
  heading = 'EuroJackpot Results & Winning Numbers';
  data = [];
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
        console.log('>>> ', data);
      });
  }
}
