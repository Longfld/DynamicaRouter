import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

@Component({
    template: `
    <h1>Page1</h1>
    I am web page the first
    `
})
class Page1 { }

const routes: Routes = [{ path: '', component: Page1}];

@NgModule({
  imports: [  RouterModule.forChild(routes) ],
  declarations: [ Page1]
})
export default class Page1Module { }
