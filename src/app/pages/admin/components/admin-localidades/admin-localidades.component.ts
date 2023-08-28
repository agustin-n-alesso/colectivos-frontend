import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import LocalidadesService from 'src/app/services/localidades.service';

@Component({
  selector: 'app-admin-localidades',
  templateUrl: './admin-localidades.component.html',
  styleUrls: ['./admin-localidades.component.scss']
})
export class AdminLocalidadesComponent implements OnInit{

	localidades?: Observable<any>;

	constructor(private _localidades: LocalidadesService){}
	ngOnInit(){
		this.localidades = this._localidades.obtenerLocalidades();
	}
}
