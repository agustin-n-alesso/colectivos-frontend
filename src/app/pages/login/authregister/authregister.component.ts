import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authregister',
  templateUrl: './authregister.component.html',
  styleUrls: ['./authregister.component.scss']
})
export class AuthregisterComponent {

	constructor(private _auth: AuthService){}
	
	datosUsuario = {
		nombre: '',
		apellido: '',
		email: '',
		repetirEmail: '',
		password: '',
		repetirPassword: ''
	}

	showError: boolean = false;
	errorMessage: string = '';
	
	enviarFormulario(formulario: NgForm){
		
		if(formulario.invalid) return;
		
		const emailMatch = this.datosUsuario.email === this.datosUsuario.repetirEmail;
		const passMatch = this.datosUsuario.password === this.datosUsuario.repetirPassword;
		
		if(!emailMatch){
			this.showError = true;
			this.errorMessage = 'Los correos no coinciden';
			return;
		}
		
		if(!passMatch){
			this.showError = true;
			this.errorMessage = 'Las contraseñas no coinciden';
			return;
		}
		
		this._auth.crearUsuario(this.datosUsuario).subscribe(res => {
			console.log(res);
		})
		
	}
	
}
