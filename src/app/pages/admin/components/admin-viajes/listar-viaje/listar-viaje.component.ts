import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listar-viaje',
  templateUrl: './listar-viaje.component.html',
  styleUrls: ['./listar-viaje.component.scss']
})
export class ListarViajeComponent {

	@Input() viajes: any[] = [];
	
}
