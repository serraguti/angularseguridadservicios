import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { provideHttpClient } from '@angular/common/http';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { LoginComponent } from './components/login-component/login-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    EmpleadosComponent,
    PerfilComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceEmpleados, provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
