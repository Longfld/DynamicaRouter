import {Component} from '@angular/core';
import { NgModule }           from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


@Component({
    template: `
    <H1>Welcome</H1>
     Main screen
    `
})
class Welcome { }

const routes: Routes = [{ path: '', component: Welcome}];

@NgModule({
  imports: [  RouterModule.forChild(routes) ],
  declarations: [ Welcome]
})
export default class WelcomeModule { }
