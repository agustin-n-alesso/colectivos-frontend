import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss']
})
export class CrearViajeComponent implements OnInit {

	@Output() onCancel: EventEmitter<boolean> = new EventEmitter();
	@Output() onSuccess: EventEmitter<any> = new EventEmitter();
	@Input() destinos: any[] = [];
	@Input() empresas: any[] = [];
	showList: boolean = false;
	
	constructor(){}
	
	ngOnInit(): void {
		console.log(this.destinos);
	}
	
	enviarFormulario = (formulario: NgForm) => {}
	
	sendCancelOrder(){
		this.onCancel.emit(true);
	}
	
	toggleList() {
    this.showList = !this.showList;
  }
	
}
