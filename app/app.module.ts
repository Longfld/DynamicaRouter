import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MyMaterialModule} from './my.material.module'
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { MyRouterLink} from './MyRouterLink';


@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,HttpClientModule, MyMaterialModule, routing ],
  declarations: [ AppComponent,MyRouterLink ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
