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

  title = 'Crud de Empleados'
  usuarios : Empleados[] = []

  AgregarEmpleado(){
    if(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado == ''){
      
      alert('No se pueden registrar valores vacios')

    } else {
      
      let NuevoEmpleado = new Empleados(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.sueldoEmpleado)
      /* Uso de los servicios */
      this.ServicioUsers.AlertaNuevoEmpleado(`Se ha agregado un nuevo usuario con el nombre de ${NuevoEmpleado.nombre}`)
      this.ServicioUsers.AgregaEmpleado(NuevoEmpleado)

      /* se limpian los campos despues de agregar un empleado */
      this.nombreEmpleado = ''
      this.apellidoEmpleado = ''
      this.cargoEmpleado = ''
      this.sueldoEmpleado = 0
    }
  }


  nombreEmpleado : string = ''
  apellidoEmpleado : string = ''
  cargoEmpleado : string = ''
  sueldoEmpleado : number = 0
  index: number = 0

  ngOnInit(): void {
  }

}
