import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TextboxemailComponent } from '../../_common/textboxes/textboxemail/textboxemail.component';
import { AuthenticationService } from '../../../assets/services/authentication.service';
import { CommonModule } from '@angular/common';
import { IResetPasswordRequest } from '../../../assets/models/IResetPasswordRequest';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    TextboxemailComponent,
    CommonModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  providers: [AuthenticationService],
})
export class ForgotPasswordComponent {
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {}

  formSubmitted: Boolean = false;
  forgotPasswordForm: FormGroup = this.fb.group({});

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  OnSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const passwordResetRequest: IResetPasswordRequest = {
        email: this.email?.value,
        password: "",
        token: this.auth.GetToken()
      };
      console.log('Form is valid and submitted.');
      console.log(passwordResetRequest);
      this.formSubmitted = true;
    } else {
      this.formSubmitted = false;
    }
  }
}