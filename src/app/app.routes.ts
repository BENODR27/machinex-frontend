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
      import('./features/machinex/dashboard/dashboard-module').then((m) => m.DashboardModule),
    // canActivate: [TenantGuard],
  },

  // Machines Module
  {
    path: 'machines',
    component: AdminLayout,

    loadChildren: () => import('./features/machinex/machines/machines-module').then((m) => m.MachinesModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Supervisor'] },
  },

  // Maintenance Module
  {
    path: 'maintenance',
    component: AdminLayout,

    loadChildren: () =>
      import('./features/machinex/maintenance/maintenance-module').then((m) => m.MaintenanceModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Technician', 'Supervisor'] },
  },

  // Downtime Module
  {
    path: 'downtime',
    component: AdminLayout,

    loadChildren: () => import('./features/machinex/downtime/downtime-module').then((m) => m.DowntimeModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Supervisor'] },
  },

  // Inventory Module
  {
    path: 'inventory',
    component: AdminLayout,

    loadChildren: () =>
      import('./features/machinex/inventory/inventory-module').then((m) => m.InventoryModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'InventoryManager'] },
  },

  // Reports Module
  {
    path: 'reports',
    component: AdminLayout,

    loadChildren: () => import('./features/machinex/reports/reports-module').then((m) => m.ReportsModule),
    // canActivate: [RoleGuard],
    data: { roles: ['Admin', 'Supervisor', 'Manager'] },
  },

  // Admin Module (Admin-only)
  {
    path: 'admin',
    component: AdminLayout,

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
