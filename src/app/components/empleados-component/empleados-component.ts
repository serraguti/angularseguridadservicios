import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-empleados-component',
  standalone: false,
  styleUrl: './empleados-component.css',
  templateUrl: './empleados-component.html',
})
export class EmpleadosComponent implements OnInit {
  arrayempleados: Empleado[] = []

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayempleados = await this._service.getEmpleadosAsync()
    this._cdr.detectChanges()
  }
}
