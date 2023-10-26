import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresasService } from 'src/app/services/empresas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.scss']
})
export class CrearEmpresaComponent {
	
	@Output() onCancel: EventEmitter<boolean> = new EventEmitter();
	@Output() onSuccess: EventEmitter<any> = new EventEmitter();
	empresa: any = {
		nombre: '',
		descripcion: '',
		website_url: '',
		activa: true,
	}
	
	constructor(private _empresa: EmpresasService){}
	
	sendCancelOrder(){
		this.onCancel.emit(true);
	}
	
	enviarFormulario(formulario: NgForm){
		if(formulario.invalid) return;
		Swal.fire({
			title: 'Creando empresa...',
			showConfirmButton: false,
			allowOutsideClick: false
		})
		
		this._empresa.addCompany(this.empresa).subscribe((res: any) => {
			Swal.fire({
				title: 'Empresa creada',
				icon: 'success',
				showConfirmButton: false,
				timer: 1500
			})
			this.sendCancelOrder();
			this.onSuccess.emit(res);
		})
		
	}

}
