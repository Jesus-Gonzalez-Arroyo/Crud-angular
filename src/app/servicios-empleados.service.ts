import { Injectable } from '@angular/core';
import { Empleados } from './Info_empleados/Info-empleados';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpleadosService {

  constructor() { }

  usuarios : Empleados[] = []

  AgregaEmpleado(empleado: Empleados){
    this.usuarios.push(empleado)
  }

  AlertaNuevoEmpleado(mensaje: string){
    alert(mensaje)
  }
}
