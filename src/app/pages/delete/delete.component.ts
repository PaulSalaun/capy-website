import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  emailForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      acknowledge: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.emailForm.valid) {
      console.log('Form Submitted', this.emailForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  hasError(controlName: string, errorName: string) {
    return this.emailForm.controls[controlName].hasError(errorName);
  }

}
