import { inject } from '@angular/core';
import { CanActivateFn, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../assets/services/authentication.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService : AuthenticationService = inject(AuthenticationService);

  if (!authService.IsLoggedIn()) {
    return router.parseUrl('/login');
  } else {
    return true;
  }
};
