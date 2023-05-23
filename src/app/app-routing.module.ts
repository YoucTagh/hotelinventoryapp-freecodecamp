import { ContainerComponent } from './container/container.component';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
  },
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  // {
  //   path: 'container',
  //   component: ContainerComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
