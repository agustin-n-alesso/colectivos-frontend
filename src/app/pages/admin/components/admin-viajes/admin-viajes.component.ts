import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import LocalidadesService from 'src/app/services/localidades.service';

@Component({
  selector: 'app-admin-viajes',
  templateUrl: './admin-viajes.component.html',
  styleUrls: ['./admin-viajes.component.scss']
})
export class AdminViajesComponent implements OnInit {
	
	isEditingOrCreating: boolean = false;
	viajes: any[] = [];
	destinos : any[] = [];
	empresas : any[] = [];
	
	constructor(private _destinos: LocalidadesService, private _empresas: EmpresasService){}
	
	ngOnInit(){
		this._destinos.obtenerLocalidades().subscribe((destinos: any) => {
			this.destinos = destinos;
		});
		
		this._empresas.getCompanies().subscribe((empresas:any) => {
			this.empresas = empresas;
		})
	}

	toggleIsEditingOrCreating = () => {
		this.isEditingOrCreating = !this.isEditingOrCreating;
	}

	pushResToArray = (event:any) => {}

}
