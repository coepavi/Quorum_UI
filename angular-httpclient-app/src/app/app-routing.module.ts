import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employee-edit', component: EmployeeEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
