import { Routes } from '@angular/router';
import { AdminLayout } from './layouts/admin-layout/admin-layout/admin-layout';

export const routes: Routes = [
  // Root redirect
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  // Dashboard
  {
    path: 'dashboard',
    component: AdminLayout,
    loadChildren: () =>
      import('./features/dashboard/dashboard-module').then((m) => m.DashboardModule),
    // canActivate: [TenantGuard],
  },

  // Machines Module
  {
    path: 'machines',
    loadChildren: () => import('./features/machines/machines-module').then((m) => m.MachinesModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Supervisor'] },
  },

  // Maintenance Module
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./features/maintenance/maintenance-module').then((m) => m.MaintenanceModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Technician', 'Supervisor'] },
  },

  // Downtime Module
  {
    path: 'downtime',
    loadChildren: () => import('./features/downtime/downtime-module').then((m) => m.DowntimeModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Supervisor'] },
  },

  // Inventory Module
  {
    path: 'inventory',
    loadChildren: () =>
      import('./features/inventory/inventory-module').then((m) => m.InventoryModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'InventoryManager'] },
  },

  // Reports Module
  {
    path: 'reports',
    loadChildren: () => import('./features/reports/reports-module').then((m) => m.ReportsModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Supervisor', 'Manager'] },
  },

  // Admin Module (Admin-only)
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin-module').then((m) => m.AdminModule),
    // canActivate: [AdminGuard],
  },

  // Unauthorized Page
  //   {
  //     path: 'unauthorized',
  //     component: UnauthorizedComponent,
  //   },

  // Wildcard redirect
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
