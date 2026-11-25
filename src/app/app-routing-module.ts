import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "empleados", component: EmpleadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
