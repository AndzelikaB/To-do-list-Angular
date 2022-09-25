import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import PL from '@angular/common/locales/pl';
import de from '@angular/common/locales/de'

registerLocaleData(PL);
registerLocaleData(de);

import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }


