import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleados } from '../Info_empleados/Info-empleados';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';

@Component({
  selector: 'app-acciones-usuarios',
  templateUrl: './acciones-usuarios.component.html',
  styleUrls: ['./acciones-usuarios.component.css']
})
export class AccionesUsuariosComponent implements OnInit {

  constructor(private ruta : Router, private Routerparams: ActivatedRoute, private ServicioEmpleados: ServiciosEmpleadosService) { }

  ngOnInit(): void {
    /* captura del id de la url */
    this.idEmpleado = this.Routerparams.snapshot.params['id']

    let InfoEmpleado = this.ServicioEmpleados.EncontrarEmpleado(this.idEmpleado)

    this.nombreEmpleado = InfoEmpleado.nombre
    this.apellidoEmpleado = InfoEmpleado.apellido
    this.cargoEmpleado = InfoEmpleado.cargo
    this.sueldoEmpleado = InfoEmpleado.sueldo

    /* captura del tipo de accion que quiere el usuario por medio de la url */
    this.accion = parseInt(this.Routerparams.snapshot.queryParams['accion'])

    if(this.accion == 1){
      this.Textboton = 'Actualizar'
    }else{
      this.Textboton = 'Eliminar'
    }
  }

  Volverhome(){
    this.ruta.navigate([''])
  }

  AccionEmpleados(){
    if (this.accion == 1) {
      let ActualizacionInfoEmpleado = new Empleados(this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.sueldoEmpleado)
      this.ServicioEmpleados.ActualizaEmpleado(this.idEmpleado, ActualizacionInfoEmpleado)
      this.ruta.navigate([''])
    }
    else{
      this.ServicioEmpleados.EliminaEmpleado(this.idEmpleado)
      this.ruta.navigate([''])
    }
  }

  Textboton: string  = ''
  accion: number = 0
  idEmpleado : number = 0
  nombreEmpleado : string = ''
  apellidoEmpleado : string = ''
  cargoEmpleado : string = ''
  sueldoEmpleado : number = 0

}
