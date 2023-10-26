import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.scss']
})
export class ListarEmpresaComponent implements OnInit {
	
	@Input() empresas: any[] = [];
	
	constructor(){}
	
	ngOnInit(): void {
		
	}
}
