import { Component } from '@angular/core';
import {PhoneComponent} from "../components/phone/phone.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    PhoneComponent
  ]
})
export class HomeComponent {

}
