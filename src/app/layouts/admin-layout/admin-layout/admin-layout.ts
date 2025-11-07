import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { AdminFooter } from "../admin-footer/admin-footer";

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterModule, AdminSidebar, AdminFooter],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {}
