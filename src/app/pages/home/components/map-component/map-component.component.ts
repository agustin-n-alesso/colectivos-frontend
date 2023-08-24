import { Component, OnInit } from '@angular/core';
import { GlobalProviderService } from 'src/app/services/global-provider.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
declare var google: any;

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  map?: any;
  origen: any = null;
  destino: any = null;
  apiLoaded: Observable<boolean>;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private _gs: GlobalProviderService, private httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.maps_api_key}`, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {

    this._gs.getOrigenEmitter().subscribe( data => {
      this.origen = data;
      this.buildMap();
    });

    this._gs.getDestinoEmitter().subscribe( data => {
      this.destino = data;
      this.buildMap();
    });

  }

  setMarker(lat:number,lng:number){
    if(!this.map) return;

    new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map: this.map
    })
  }

  fixMapBounds(origenLat:number,origenLng:number,destinoLat:number,destinoLng:number){
    const markerBounds = new google.maps.LatLngBounds();
    const point = new google.maps.LatLng(origenLat, origenLng);
    const point2 = new google.maps.LatLng(destinoLat, destinoLng);

    this.setMarker(origenLat,origenLng);
    this.setMarker(destinoLat,destinoLng);

    markerBounds.extend(point);
    markerBounds.extend(point2);

    this.map.fitBounds(markerBounds);
  }

  buildMap(){
    if(!this.origen || !this.destino) return;

	const mismoDestino = this.destino?.id === this.origen?.id;

	if(mismoDestino){
		this.showError = true;
		this.errorMessage = 'El origen y destino deben ser distintos';
	}else{
		this.showError = false;
		this.errorMessage = '';
	}

    const mainMapContainer = document.querySelector("mainMapContainer");
    if(mainMapContainer)
      mainMapContainer.innerHTML = '<div id="mainMap"></div>';

    this.map = new google.maps.Map(document.getElementById("mainMap") as HTMLElement, {
      center: { lat: this.origen.lat, lng: this.origen.lng },
      zoom: 8,
    });

    // remove maps options and actions
    this.map.setOptions({
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      disableDefaultUI: true
    });

    this.fixMapBounds(this.origen.lat,this.origen.lng,this.destino.lat,this.destino.lng);

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(this.map);

    const request = {
      origin: { lat: this.origen.lat, lng: this.origen.lng },
      destination: { lat: this.destino.lat, lng: this.destino.lng },
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(result: any, status: any) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });

  }

}
