import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes= GetScreens();

export const routing = RouterModule.forRoot(routes);

function GetScreens(){
  var results :Array<Object> = Array<Object>();
  let screens :Array<string> = ["page1","page2","page3"]

  results.push({ path: '' ,redirectTo: 'welcome', pathMatch: 'full'});
  results.push({ path: 'welcome', loadChildren: 'app/screens/welcome.module' })
  screens.map(screenId => results.push({path: screenId, loadChildren: 'app/screens/' + screenId + '.module' }))
  return results 
}
