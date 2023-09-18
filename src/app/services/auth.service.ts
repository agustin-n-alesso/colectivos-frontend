	import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
	import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { environment } from "src/environments/environment";

	@Injectable({
		providedIn: 'root'
	})
	export class AuthService {
		constructor(@Inject(Auth) private auth: Auth, private _http: HttpClient) {}

		iniciarSesion(usuario:string,password:string){
			return signInWithEmailAndPassword(this.auth,usuario,password);
		}
		
		crearUsuario(usuario:any){
			return this._http.post(`${environment.server_url}:${environment.server_port}/auth/user`,{...usuario});
		}
	}