import { Component } from '@angular/core';
import {ReversePipe} from 'ngx-pipes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ReversePipe]
})

export class AppComponent {

  // constructor(private reversePipe: ReversePipe) {
  //   this.reversePipe.transform('foo'); 
  // }

  someDate = Date.now();

  data(){
    Date.now();
  }
  title = "Przykłady-pipów"
  test = 'Data'
  dzien = 'Dzień'
  number = 7.0890990909765;
  price = 2.99;
  percentage = 100;

  translate = {
    zima: 'winter',
    wiosna: 'spring',
    jesień: 'autumn',
    lato: 'summer',
  };

  words = 'Codylenek'
}