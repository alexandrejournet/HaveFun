import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MarkerManager, AgmMarker } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude = 45.750000;
  longitude = 4.850000;
  mapType = 'roadmap';

  parentMessage = '';

  selectedMarker;
  markers;

  constructor() {  }

  ngOnInit() {
    this.initMap();
  }

  initMap(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.markers = [{lat: position.coords.latitude, lng: position.coords.longitude, alpha: 1}];
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng});
  }

  selectMarker(event: { latitude: string; longitude: string; }) {
    this.parentMessage = '';
    this.parentMessage += event.latitude + '/';
    this.parentMessage += event.longitude;
  }

  placeMarker(event) {
    this.addMarker(event.coords.lat, event.coords.lng);
  }

}
