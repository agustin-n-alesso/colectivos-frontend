import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLocalidadesComponent } from './components/admin-localidades/admin-localidades.component';
import { AdminViajesComponent } from './components/admin-viajes/admin-viajes.component';
import { AdminPasajesComponent } from './components/admin-pasajes/admin-pasajes.component';
import { AdminEmpresasComponent } from './components/admin-empresas/admin-empresas.component';
import { CrearEmpresaComponent } from './components/admin-empresas/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './components/admin-empresas/listar-empresa/listar-empresa.component';
import { FormsModule } from '@angular/forms';
import { ListarViajeComponent } from './components/admin-viajes/listar-viaje/listar-viaje.component';
import { CrearViajeComponent } from './components/admin-viajes/crear-viaje/crear-viaje.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLocalidadesComponent,
    AdminViajesComponent,
    AdminPasajesComponent,
    AdminEmpresasComponent,
    CrearEmpresaComponent,
    ListarEmpresaComponent,
    ListarViajeComponent,
    CrearViajeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
		FormsModule
  ]
})
export class AdminModule { }
