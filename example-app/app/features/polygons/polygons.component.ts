import { Component, OnInit } from '@angular/core';
import {latLngBounds, MapOptions, PathOptions} from 'leaflet';
import {of} from 'rxjs/observable/of';
import {delay, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

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

  latLngBounds;

  pathOptions: Observable<PathOptions> = of({
    weight: 1,
    color: 'red'
  }).pipe(
      delay(4000)
    );

  constructor() { }

  ngOnInit() {
    this.latLngBounds = this.coordinates
      .pipe(
        map(coordinates => latLngBounds(coordinates as any))
      );
  }

}