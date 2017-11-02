import { Observable } from 'rxjs/Observable';
import { browser } from 'protractor';
import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'https://api.chucknorris.io/jokes/random';
  urlImage = 'https://api.adorable.io/avatars/86/';
  post$;
  testt;
  constructor(private httpClient: HttpClient) {
    this.getNews();
  }
  getNews() {
    this.post$ = this.httpClient.get(this.url).pluck('value').delay(6000).repeat().startWith('Waiting for message...');
    this.urlImage +=  Math.random();
  }
}
