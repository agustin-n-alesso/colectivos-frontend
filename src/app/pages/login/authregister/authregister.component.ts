import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authregister',
  templateUrl: './authregister.component.html',
  styleUrls: ['./authregister.component.scss']
})
export class AuthregisterComponent {

	constructor(private _auth: AuthService, private router: Router){}
	
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
		
		Swal.fire({
			title: 'Registrando...',
			showConfirmButton: false,
			allowOutsideClick: false
		});
		
		if(formulario.invalid) return;
		
		const emailMatch = this.datosUsuario.email === this.datosUsuario.repetirEmail;
		const passMatch = this.datosUsuario.password === this.datosUsuario.repetirPassword;
		
		if(!emailMatch){
			Swal.fire('No pudo registrarse', 'Los emails no coinciden', 'error');
			return;
		}
		
		if(!passMatch){
			Swal.fire('No pudo registrarse', 'Las contraseñas no coinciden', 'error');
			return;
		}
		
		this._auth.crearUsuario(this.datosUsuario).subscribe(res => {
			Swal.fire('Registrado', 'Usuario registrado correctamente', 'success');
			this.router.navigate(['/auth/login']);
		})
		
	}
	
}
