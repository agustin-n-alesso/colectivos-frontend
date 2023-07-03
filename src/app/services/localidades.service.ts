import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: 'root'
})
export default class LocalidadesService {

	constructor(private _http: HttpClient){}

	private getBaseUrl = () => {
		return `${environment.server_url}:${environment.server_port}`;
	}

	obtenerLocalidades(): Observable<Object>{
		const url = `${this.getBaseUrl()}/localidades`;
		return this._http.get(url);
	}

}