import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

@Component({
    template: `
    <h1>Page3</h1>
    I am web page the third
    `
})
class Page3 { }

const routes: Routes = [{ path: '', component: Page3}];

@NgModule({
  imports: [  RouterModule.forChild(routes) ],
  declarations: [ Page3]
})
export default class Page3Module { }
