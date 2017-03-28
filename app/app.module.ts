import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { MyRouterLink} from './MyRouterLink';


@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,HttpModule,JsonpModule, routing ],
  declarations: [ AppComponent,MyRouterLink ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
