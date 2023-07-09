import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlobalProviderService } from 'src/app/services/global-provider.service';
import LocalidadesService from 'src/app/services/localidades.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  private localidades?: any[];
  hoyDesde: Date = new Date();
  hoyHasta: Date = new Date();
  localidades$?: Observable<any>;
  formData: any = {
    desde: '',
    hasta: '',
  }

  constructor( private _localidades: LocalidadesService, private _gs: GlobalProviderService ) {}

  get minDate(): string {
    return this.hoyDesde.toISOString().split('T')[0];
  }

  get minDateHasta(): string {
    return this.hoyHasta.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.localidades$ = this._localidades.obtenerLocalidades();
    this.localidades$.subscribe((data) => {
      this.localidades = data;
    });
  }

  formatToArray = (id:string,lat:number,lng:number,nombre:string) => {
    return {
      id,
      lat,
      lng,
      nombre
    };
  }

  emitirOrigen(datos:any){
    this._gs.emitirOrigen(
      datos.value === '' ? null : this.formatToArray(
        datos.value,
        this.localidades?.find(item => item._id === datos.value)?.latitud,
        this.localidades?.find(item => item._id === datos.value)?.longitud,
        this.localidades?.find(item => item._id === datos.value)?.nombre
      )
    );
  }

  emitirDestino(datos:any){
    this._gs.emitirDestino(
      datos.value === '' ? null : this.formatToArray(
        datos.value,
        this.localidades?.find(item => item._id === datos.value)?.latitud,
        this.localidades?.find(item => item._id === datos.value)?.longitud,
        this.localidades?.find(item => item._id === datos.value)?.nombre
      )
    );
  }

  submitForm(f: NgForm){
    console.log(f);
  }

}
