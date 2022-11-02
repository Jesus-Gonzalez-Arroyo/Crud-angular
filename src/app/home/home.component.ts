import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../Info_empleados/Info-empleados';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rutas : Router, private ServicioUsers: ServiciosEmpleadosService) { 
    this.usuarios = ServicioUsers.usuarios
  }

  title = 'Crud'

  usuarios : Empleados[] = []

  AgregarEmpleado(){
    let empleado = new Empleados(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.sueldoEmpleado)
    /* Uso de los servicios */
    this.ServicioUsers.AlertaNuevoEmpleado(`Se ha agregado un nuevo usuario con el nombre de ${empleado.nombre}`)
    this.ServicioUsers.AgregaEmpleado(empleado)

    this.nombreEmpleado = ''
    this.apellidoEmpleado = ''
    this.cargoEmpleado = ''
    this.sueldoEmpleado = 0
  }

  RutaButtons(){
    this.rutas.navigate(['/accionesUsers'])
  }

  nombreEmpleado : string = ''
  apellidoEmpleado : string = ''
  cargoEmpleado : string = ''
  sueldoEmpleado : number = 0
  index: number = 0

  ngOnInit(): void {
  }

}
