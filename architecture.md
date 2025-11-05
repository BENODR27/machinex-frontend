```
src/
 ├── app/
 │    ├── core/                          # Singletons, interceptors, auth service
 │    │    ├── auth/
 │    │    │    ├── auth.service.ts
 │    │    │    ├── auth.model.ts
 │    │    │    ├── auth.store.ts
 │    │    │    └── auth.guard.ts
 │    │    │
 │    │    ├── interceptors/
 │    │    │    ├── token.interceptor.ts
 │    │    │    ├── error.interceptor.ts
 │    │    │    └── logging.interceptor.ts
 │    │    │
 │    │    ├── services/
 │    │    │    ├── api.service.ts
 │    │    │    ├── config.service.ts
 │    │    │    ├── notification.service.ts
 │    │    │    ├── websocket.service.ts
 │    │    │    └── file.service.ts
 │    │    │
 │    │    └── guards/
 │    │         ├── role.guard.ts
 │    │         ├── tenant.guard.ts
 │    │         └── admin.guard.ts
 │    │
 │    ├── shared/                        # Reusable UI components, directives, pipes
 │    │    ├── components/
 │    │    │    ├── table/
 │    │    │    │    ├── table.component.ts
 │    │    │    │    ├── table.component.html
 │    │    │    │    └── table.component.scss
 │    │    │    ├── form-field/
 │    │    │    ├── dialog/
 │    │    │    ├── card/
 │    │    │    └── loader/
 │    │    │
 │    │    ├── directives/
 │    │    │    ├── has-permission.directive.ts
 │    │    │    ├── debounce-click.directive.ts
 │    │    │    └── autofocus.directive.ts
 │    │    │
 │    │    ├── pipes/
 │    │    │    ├── duration.pipe.ts
 │    │    │    ├── utc-to-local.pipe.ts
 │    │    │    └── currency-format.pipe.ts
 │    │    │
 │    │    ├── utils/
 │    │    │    ├── helpers.ts
 │    │    │    ├── validators.ts
 │    │    │    └── constants.ts
 │    │    │
 │    │    └── ui/
 │    │         ├── buttons/
 │    │         ├── cards/
 │    │         ├── modals/
 │    │         └── theme/
 │    │
 │    ├── features/                      # Domain modules (lazy-loaded)
 │    │    ├── dashboard/
 │    │    │    ├── components/
 │    │    │    │    ├── kpi-card.component.ts
 │    │    │    │    ├── uptime-chart.component.ts
 │    │    │    │    └── maintenance-summary.component.ts
 │    │    │    ├── dashboard.routes.ts
 │    │    │    ├── dashboard.module.ts
 │    │    │    └── dashboard.store.ts
 │    │    │
 │    │    ├── machines/
 │    │    │    ├── components/
 │    │    │    │    ├── machine-list.component.ts
 │    │    │    │    ├── machine-detail.component.ts
 │    │    │    │    ├── machine-form.component.ts
 │    │    │    │    └── machine-allocate.component.ts
 │    │    │    ├── services/
 │    │    │    │    └── machines.api.ts
 │    │    │    ├── machines.routes.ts
 │    │    │    └── machines.store.ts
 │    │    │
 │    │    ├── maintenance/
 │    │    │    ├── components/
 │    │    │    │    ├── maintenance-list.component.ts
 │    │    │    │    ├── maintenance-form.component.ts
 │    │    │    │    └── maintenance-calendar.component.ts
 │    │    │    ├── services/
 │    │    │    │    └── maintenance.api.ts
 │    │    │    ├── maintenance.routes.ts
 │    │    │    └── maintenance.store.ts
 │    │    │
 │    │    ├── downtime/
 │    │    │    ├── components/
 │    │    │    │    ├── downtime-list.component.ts
 │    │    │    │    ├── downtime-detail.component.ts
 │    │    │    │    └── downtime-log.component.ts
 │    │    │    ├── services/
 │    │    │    │    └── downtime.api.ts
 │    │    │    ├── downtime.routes.ts
 │    │    │    └── downtime.store.ts
 │    │    │
 │    │    ├── inventory/
 │    │    │    ├── components/
 │    │    │    │    ├── stock-list.component.ts
 │    │    │    │    ├── stock-card.component.ts
 │    │    │    │    └── stock-form.component.ts
 │    │    │    ├── services/
 │    │    │    │    └── inventory.api.ts
 │    │    │    ├── inventory.routes.ts
 │    │    │    └── inventory.store.ts
 │    │    │
 │    │    ├── reports/
 │    │    │    ├── components/
 │    │    │    │    ├── report-list.component.ts
 │    │    │    │    ├── report-view.component.ts
 │    │    │    │    └── report-export.component.ts
 │    │    │    ├── services/
 │    │    │    │    └── reports.api.ts
 │    │    │    ├── reports.routes.ts
 │    │    │    └── reports.store.ts
 │    │    │
 │    │    └── admin/
 │    │         ├── components/
 │    │         │    ├── user-list.component.ts
 │    │         │    ├── role-list.component.ts
 │    │         │    └── org-settings.component.ts
 │    │         ├── services/
 │    │         │    └── admin.api.ts
 │    │         ├── admin.routes.ts
 │    │         └── admin.store.ts
 │    │
 │    ├── state/                       # Global or cross-feature state
 │    │    ├── auth.store.ts
 │    │    ├── tenant.store.ts
 │    │    ├── notification.store.ts
 │    │    ├── dashboard.store.ts
 │    │    └── index.ts
 │    │
 │    ├── app.routes.ts                 # Root route definitions
 │    └── app.component.ts
 │
 ├── environments/
 │    ├── environment.ts
 │    └── environment.prod.ts
 │
 ├── assets/
 │    ├── icons/
 │    ├── styles/
 │    │    └── global.scss
 │    └── i18n/
 │
 ├── styles.scss
 └── main.ts



```
