import { Component, OnInit } from '@angular/core';
import {MapOptions} from 'leaflet';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss']
})
export class PolygonsComponent implements OnInit {

  options: MapOptions = {
    center: [51.759445, 19.457216],
    zoom: 13
  };

  coordinates = of([[51.759445, 19.457216], [51.750, 19.455], [51.751, 19.471]])
    .pipe(
      delay(2000)
    );

  constructor() { }

  ngOnInit() {
  }

}
