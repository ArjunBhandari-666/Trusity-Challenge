import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your dashboard component
import { AdminDataComponent } from './admin-data/admin-data.component'; // Import your admin data component

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to the dashboard by default
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin-data', component: AdminDataComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
