import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
     <my-router-link ></my-router-link>
    <router-outlet></router-outlet>
  `
 // directives: [MyRouterLink]
})
export class AppComponent {
  
}
