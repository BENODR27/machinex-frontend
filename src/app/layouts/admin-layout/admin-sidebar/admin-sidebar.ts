import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminRoutingModule } from "../../../features/admin/admin-routing-module";

@Component({
  selector: 'app-admin-sidebar',
  imports: [CommonModule, AdminRoutingModule],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.scss',
})
export class AdminSidebar {

}
