import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

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

	constructor(private _auth: AuthService, private cookieService: CookieService) {}

	enviarFormulario(formulario: NgForm){
		if(formulario.invalid) return;

		this._auth.iniciarSesion(this.datosUsuario.usuario,this.datosUsuario.password)
			.then(response => {
				console.log(response);

				response.user.getIdTokenResult().then(response => {
					this.cookieService.set('accessToken',response.token)
				});


			})
			.catch(error => {
				console.log(error);
			})
	}

}
