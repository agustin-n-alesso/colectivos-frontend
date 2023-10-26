import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { getBaseUrl } from "../utils";

@Injectable({
	providedIn: 'root'
})
export default class LocalidadesService {

	constructor(private _http: HttpClient){}

	obtenerLocalidades(): Observable<Object>{
		const url = `${getBaseUrl()}/localidades`;
		return this._http.get(url);
	}

}