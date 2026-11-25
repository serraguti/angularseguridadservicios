import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { LoginComponent } from './components/login-component/login-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "empleados", component: EmpleadosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
