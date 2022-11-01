import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccionesUsuariosComponent } from './acciones-usuarios/acciones-usuarios.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosEmpleadosService } from './servicios-empleados.service';

const appRoutes : Routes  = [
  {path: '', component: HomeComponent},
  /* se prepara la ruta para recibir un parametro */
  {path: 'accionesUsers/:id', component: AccionesUsuariosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AccionesUsuariosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiciosEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
