import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'https://api.chucknorris.io/jokes/random';
  urlImage;
  post$;
  constructor(private httpClient: HttpClient) {
    this.getNews();
  }
  getNews() {
    this.post$ = this.httpClient.get(this.url).pluck('value');
    this.urlImage = 'https://api.adorable.io/avatars/86/' + Math.random();
  }
}
