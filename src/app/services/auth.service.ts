import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { map } from "rxjs";
import { getBaseUrl } from "../utils";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(@Inject(Auth) private auth: Auth, private _http: HttpClient) {}

	iniciarSesion(usuario:string,password:string){
		return signInWithEmailAndPassword(this.auth,usuario,password);
	}
	
	crearUsuario(usuario:any){
		return this._http.post(`${getBaseUrl()}/auth/user`,{...usuario})
			.pipe( map( (respuesta: any) => {
				const nuevaRespuesta = {
					...respuesta._doc,
				}
				delete nuevaRespuesta._id;
				delete nuevaRespuesta.__v;
				
				return nuevaRespuesta;
			}) )
	}
}