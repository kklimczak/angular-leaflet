import { Component, OnInit } from '@angular/core';
import {MapOptions} from 'leaflet';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  options: MapOptions = {
    center: [51.759445, 19.457216],
    zoom: 13
  };

  latLng = of([51.759445, 19.457216])
    .pipe(
      delay(2000)
    );

  constructor() { }

  ngOnInit() {
  }

}
