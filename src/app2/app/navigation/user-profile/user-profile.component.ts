import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../assets/services/authentication.service';

@Component({
  selector: 'tfi-user-profile',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  authService : AuthenticationService = inject(AuthenticationService);

  checkLogin: boolean = this.authService.IsLoggedIn();
}
