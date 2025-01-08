import { inject } from '@angular/core';
import { CanActivateChildFn, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from '../../assets/services/authentication.service';

export const authGuardchildGuard: CanActivateChildFn = (childRoute, state) => {
  const router: Router = inject(Router);
  const authService : AuthenticationService = inject(AuthenticationService);

  if (!authService.IsLoggedIn()) {
    return router.parseUrl('/login');
  } else {
    return true;
  }

};
