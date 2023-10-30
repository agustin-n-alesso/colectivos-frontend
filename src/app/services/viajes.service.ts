import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export default class ViajesService {

	constructor(private _http: HttpClient) {}

	obtenerViajes = () => this._http.get('http://localhost:1973/viajes');
	
	guardarNuevoViaje = (formData:any) => {
		return this._http.post('http://localhost:1973/viajes',formData)
	}
	
}