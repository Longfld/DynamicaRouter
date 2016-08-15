mport { Component } from '@angular/core';

import './rxjs-operators';

import { MyRouterLink} from './MyRouterLink';

@Component({
  selector: 'my-app',
  template: `
     <my-router-link ></my-router-link>
    <router-outlet></router-outlet>
  `,
  directives: [MyRouterLink]
})
export class AppComponent {
  
}
