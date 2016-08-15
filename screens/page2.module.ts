import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

@Component({
    template: `
    <h1>Page2</h1>
    I am web page the Second
    `
})
class Page2 { }

const routes: Routes = [{ path: '', component: Page2}];

@NgModule({
  imports: [  RouterModule.forChild(routes) ],
  declarations: [ Page2]
})
export default class Page2Module { }
