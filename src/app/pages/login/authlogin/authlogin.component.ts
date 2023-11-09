import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

interface IUsuarioDatos {
	usuario: string;
	password: string;
}

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.scss']
})
export class AuthloginComponent {

	datosUsuario : IUsuarioDatos = {
		usuario: '',
		password: ''
	}

	constructor(private _auth: AuthService, private cookieService: CookieService, private router: Router) {}

	enviarFormulario(formulario: NgForm){
		if(formulario.invalid) return;

		Swal.fire({
			title: 'Iniciando Sesión...',
			showConfirmButton: false,
			allowOutsideClick: false
		});
		
		this._auth.iniciarSesion(this.datosUsuario.usuario,this.datosUsuario.password)
			.then(response => {
				response.user.getIdTokenResult().then(response => {
					
					let fecha = new Date();
					fecha.setHours(fecha.getHours() + 1);
					
					this.cookieService.set('_at',response.token,fecha);
					Swal.close();
					this.router.navigateByUrl('/admin/localidades');
				});
			})
			.catch(error => {
				Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
				console.log(error);
			})
	}

}
