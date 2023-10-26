import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-admin-empresas',
  templateUrl: './admin-empresas.component.html',
  styleUrls: ['./admin-empresas.component.scss']
})
export class AdminEmpresasComponent implements OnInit {
	
	isEditingOrCreating: boolean = false;
	empresas : any[] | null = null;
	
	constructor(private _empresas: EmpresasService){}
	
	ngOnInit(){
		this._empresas.getCompanies().subscribe((empresas: any) => {
			this.empresas = empresas;
		});
	}
	
	toggleIsEditingOrCreating(){
		this.isEditingOrCreating = !this.isEditingOrCreating;
	}
	
	pushResToArray(res: any){
		this.empresas?.push(res);
	}

}
