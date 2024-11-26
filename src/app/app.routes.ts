import { Routes } from '@angular/router';
import {ConditionsComponent} from "./pages/conditions/conditions.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: 'conditions', component: ConditionsComponent },
  // { path: 'delete-account', component: DeleteAccountComponent },
  { path: '**', component: HomeComponent }
];
