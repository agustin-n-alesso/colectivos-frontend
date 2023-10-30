import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import ViajesService from 'src/app/services/viajes.service';
import Swal from 'sweetalert2';

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
	
	formData: any = {
		fecha: '',
		horario: '',
		empresa: '',
		destinos: []
	}
	
	constructor(private _viajes: ViajesService){}
	
	ngOnInit(): void {
		
	}
	
	enviarFormulario = (formulario: NgForm) => {
		if(formulario.invalid || this.formData.destinos.length === 0){
			Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
			return
		}
		
		this.formData.destinos.sort((a:any,b:any) => {
			const aKey:number = Number(Object.keys(a)[0]);
			const bKey:number = Number(Object.keys(b)[0]);
			
			return aKey - bKey;
		})
		
		this._viajes.guardarNuevoViaje(this.formData).subscribe(({response, status} : any) => {
			if(status === 200){
				this.onSuccess.emit(response);
			}
		})
	}
	
	sendCancelOrder(){
		this.onCancel.emit(true);
	}
	
	toggleList() {
    this.showList = !this.showList;
  }
	
	setDestino(event:any){
		const item = {[event.target.name]: event.target.value};
		
		const shouldAdd = this.formData.destinos.filter((i:any) => i[event.target.name] === event.target.value).length === 0;
		console.log("🚀 ~ file: crear-viaje.component.ts:44 ~ CrearViajeComponent ~ setDestino ~ shouldAdd:", shouldAdd)
		
		if(shouldAdd){
			this.formData.destinos.push(item);
		}else{
			this.formData.destinos = [...this.formData.destinos.filter((i:any) => i[event.target.name] !== event.target.value)]
		}
	}
	
}
