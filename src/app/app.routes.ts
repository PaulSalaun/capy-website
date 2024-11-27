import {Routes} from '@angular/router';
import {ConditionsComponent} from "./pages/conditions/conditions.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: 'privacy', component: ConditionsComponent },
  // { path: 'delete', component:  },
  { path: '**', component: HomeComponent }
];
