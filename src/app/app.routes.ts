import {Routes} from '@angular/router';
import {ConditionsComponent} from "./pages/conditions/conditions.component";
import {HomeComponent} from "./pages/home/home.component";
import {DeleteComponent} from "./pages/delete/delete.component";

export const routes: Routes = [
  { path: 'privacy', component: ConditionsComponent },
  { path: 'capy-website/privacy', component: ConditionsComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'capy-website/delete', component: DeleteComponent },
  // { path: 'delete', component:  },
  { path: '**', component: HomeComponent }
];
