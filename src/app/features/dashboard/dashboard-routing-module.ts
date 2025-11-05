import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiCardComponent } from './components/kpi-card.component/kpi-card.component';
import { UptimeChartComponent } from './components/uptime-chart.component/uptime-chart.component';
import { MaintenanceComponent } from './components/maintenance.component/maintenance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'kpi',
        pathMatch: 'full',
      },
      {
        path: 'kpi',
        component: KpiCardComponent,
        // canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Supervisor', 'Technician'] },
      },
      {
        path: 'uptime',
        component: UptimeChartComponent,
        // canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Supervisor', 'Technician'] },
      },
      {
        path: 'maintenance-summary',
        component: MaintenanceComponent,
        // canActivate: [RoleGuard],
        data: { roles: ['Admin', 'Supervisor'] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
