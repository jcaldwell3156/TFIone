import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../assets/services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  authService : AuthenticationService = inject(AuthenticationService);

  checkLogin: boolean = this.authService.IsLoggedIn();

}
