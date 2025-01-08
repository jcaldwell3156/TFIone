import { Component, OnDestroy } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../assets/services/authentication.service';
import { RouterModule, Router } from '@angular/router';
import { ILoginRequest } from '../../assets/models/ILoginRequest';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TextboxemailComponent } from '../_common/textboxes/textboxemail/textboxemail.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatProgressSpinnerModule,
    TextboxemailComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthenticationService],
})
export class LoginComponent implements OnDestroy {
  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  isSubmitted: boolean = false;

  isLoading: boolean = false;

  errorMessage: string = '';

  loginForm: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(12)]],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  OnLogin(): void {
    this.isSubmitted = true;
    if (this.email?.value != null && this.password?.value != null && this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = "";
      let loginCredentials: ILoginRequest = {
        email: this.email.value.toString(),
        password: this.password.value.toString(),
      };
      this.EnableControls(false);
      this.auth.LogIn(loginCredentials).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.errorMessage = 'Failed to login: Servers are busy or down';
          this.isLoading = false;
          this.EnableControls(true);
          console.log(error);
        },
        complete: () => {
          this.VerifyAndRedirect();
        },
      });
    } else {
      this.errorMessage = 'Please provide a valid email or password.';
    }
  }

  VerifyAndRedirect(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.EnableControls(true);
      if (this.auth.IsLoggedIn()) {
        this.router.navigateByUrl('/');
      } else {
        this.errorMessage = 'Failed to login: Email or Password are invalid.';
      }
    }, 3000);
  }

  EnableControls(condition: boolean): void {
    if (condition) {
      this.loginForm.get('email')?.enable();
      this.loginForm.get('password')?.enable();
    } else {
      this.loginForm.get('email')?.disable();
      this.loginForm.get('password')?.disable();
    }
  }

  ngOnDestroy(): void {
    //TODO: Fix subscription bugs when building project
  }
}
