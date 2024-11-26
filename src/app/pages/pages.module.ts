import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConditionsComponent} from "./conditions/conditions.component";
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [ConditionsComponent, HomeComponent],
  providers: [ConditionsComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule {
}
