import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalProviderService {

  private origenEmitter: EventEmitter<any> = new EventEmitter<any>();
  private destinoEmitter: EventEmitter<any> = new EventEmitter<any>();

  getOrigenEmitter = () => this.origenEmitter;
  getDestinoEmitter = () => this.destinoEmitter;

  emitirOrigen = (datos:any) => this.origenEmitter.emit(datos);
  emitirDestino = (datos:any) => this.destinoEmitter.emit(datos);

  constructor() { }
}
