import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {FirebaseService} from "../../service/firebase.service";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";

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
  authError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: Auth, private firebaseService: FirebaseService
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      acknowledge: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.emailForm.valid) {
      const {email, password} = this.emailForm.value;

      signInWithEmailAndPassword(this.auth, email, password)
        .then(userCredential => {
          this.firebaseService.deleteUserDocument(userCredential.user.uid).then(r =>
            this.firebaseService.deleteUserAccount(userCredential.user.uid));
        })
        .catch(error => {
          console.error('Error code:', error.code);
          console.error('Error message:', error.message);

          switch (error.code) {
            case 'auth/invalid-credential':
              this.authError = 'Email ou mot de passe incorrect';
              break;
            case 'auth/user-not-found':
              this.authError = 'Aucun utilisateur trouvé avec cet email';
              break;
            case 'auth/too-many-request':
              this.authError = 'Trop de tentiatives, veuillez patienter avant de recommencer';
              break;
            default:
              this.authError = 'Erreur d\'authentification';
          }
        });
    }
  }

  hasError(controlName: string, errorName: string) {
    return this.emailForm.controls[controlName].hasError(errorName);
  }
}
