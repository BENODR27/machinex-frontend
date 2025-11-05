import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tenantGuardGuard } from './tenant.guard-guard';

describe('tenantGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tenantGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
