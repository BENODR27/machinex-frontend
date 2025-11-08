import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list.component/user-list.component';
import { RoleListComponent } from './components/role-list.component/role-list.component';
import { OrgSettingsComponent } from './components/org-settings.component/org-settings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      {
        path: 'user',
        component: UserListComponent,
        // canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Supervisor', 'Technician'] },
      },
      {
        path: 'role',
        component: RoleListComponent,
        // canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Supervisor', 'Technician'] },
      },
      {
        path: 'org-settings',
        component: OrgSettingsComponent,
        // canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Supervisor', 'Technician'] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
