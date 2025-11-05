import { CanActivateFn } from '@angular/router';

export const tenantGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
