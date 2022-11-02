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

  EncontrarEmpleado(id: number){
    let empleado : Empleados = this.usuarios[id]
    return empleado
  }

  ActualizaEmpleado(id: number, empleado: Empleados){
    let empleadoActualizado = this.usuarios[id]

    empleadoActualizado.nombre = empleado.nombre
    empleadoActualizado.apellido = empleado.apellido
    empleadoActualizado.cargo = empleado.cargo
    empleadoActualizado.sueldo = empleado.sueldo
  }

  EliminaEmpleado(id: number){
    this.usuarios.splice(id, 1)
  }

  AlertaNuevoEmpleado(mensaje: string){
    alert(mensaje)
  }
}
