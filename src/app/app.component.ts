import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyAbckpGJM_h6p_JbQ8slM9Q3dyuqYLfVrY',
      authDomain: 'books-f3a71.firebaseapp.com',
      databaseURL: 'https://books-f3a71.firebaseio.com',
      projectId: 'books-f3a71',
      storageBucket: 'books-f3a71.appspot.com',
      messagingSenderId: '1029319855812'
    };
    firebase.initializeApp(config);
  }
}
