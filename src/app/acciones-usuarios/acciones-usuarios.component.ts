import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acciones-usuarios',
  templateUrl: './acciones-usuarios.component.html',
  styleUrls: ['./acciones-usuarios.component.css']
})
export class AccionesUsuariosComponent implements OnInit {

  constructor(private ruta : Router, private Routerparams: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  Volverhome(){
    this.ruta.navigate([''])
  }

  

  /* captura del id de la url */
  idUser = this.Routerparams.snapshot.params['id']

  nombreEmpleado : string = ''
  apellidoEmpleado : string = ''
  cargoEmpleado : string = ''
  sueldoEmpleado : number = 0

}
