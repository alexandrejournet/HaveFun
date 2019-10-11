import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude = 45.750000;
  longitude = 4.850000;
  mapType = 'roadmap';

  constructor() { }

  ngOnInit() {
  }

}
