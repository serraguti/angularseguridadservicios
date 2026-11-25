import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  empleado!: Empleado

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ){}

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem("TOKEN") == null){
      this._router.navigate(['/login'])
    }
    this.empleado = await this._service.getPerfilAsync()
    this._cdr.detectChanges()
  }
}
