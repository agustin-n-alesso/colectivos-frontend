	import { Inject, Injectable } from "@angular/core";
	import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";

	@Injectable({
		providedIn: 'root'
	})
	export class AuthService {
		constructor(@Inject(Auth) private auth: Auth) {}

		iniciarSesion(usuario:string,password:string){
			return signInWithEmailAndPassword(this.auth,usuario,password);
		}
	}