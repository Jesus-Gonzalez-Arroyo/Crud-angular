import { Injectable } from '@angular/core';
import { Empleados } from './Info_empleados/Info-empleados';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpleadosService {

  constructor() { }

  usuarios : Empleados[] = [
    new Empleados('Jesus', 'Gonzalez', 'Director', 1200),
    new Empleados('Maneul', 'Gonzalez', 'Coordinador', 3500),
    new Empleados('Yoniris', 'Gonzalez', 'Presidenta', 1800)
  ]

  AgregaEmpleado(empleado: Empleados){
    this.usuarios.push(empleado)
  }
}
