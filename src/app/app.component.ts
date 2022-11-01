import { Component } from '@angular/core';
import { Empleados } from './Info_empleados/Info-empleados';
import { ServiciosEmpleadosService } from './servicios-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Crud';

  constructor(private ServicioAgregar : ServiciosEmpleadosService){}

  usuarios : Empleados[] = [
    new Empleados('Jesus', 'Gonzalez', 'Director', 1200),
    new Empleados('Maneul', 'Gonzalez', 'Coordinador', 3500),
    new Empleados('Yoniris', 'Gonzalez', 'Presidenta', 1800)
  ]

  AgregarEmpleado(){
    let empleado = new Empleados(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.sueldoEmpleado)
    this.usuarios.push(empleado)
  }

  nombreEmpleado : string = ''
  apellidoEmpleado : string = ''
  cargoEmpleado : string = ''
  sueldoEmpleado : number = 0
}
