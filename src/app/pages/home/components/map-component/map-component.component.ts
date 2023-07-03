import { Component, OnInit } from '@angular/core';
import { GlobalProviderService } from 'src/app/services/global-provider.service';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  origen: string = '';
  destino: string = '';

  constructor(private _gs: GlobalProviderService) { }

  ngOnInit(): void {

    this._gs.getOrigenEmitter().subscribe( data => {
      this.origen = data;
    });

    this._gs.getDestinoEmitter().subscribe( data => {
      this.destino = data;
    });

  }

}
