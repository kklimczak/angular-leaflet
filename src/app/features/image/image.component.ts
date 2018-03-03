import { Component, OnInit } from '@angular/core';
import {CRS, MapOptions} from 'leaflet';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  options: MapOptions = {
    center: [0, 0],
    zoom: -2,
    minZoom: -2,
    crs: CRS.Simple
  };

  width = of(1000).pipe(
    delay(1000)
  );

  height = of(948).pipe(
    delay(2000)
  );

  constructor() { }

  ngOnInit() {
  }

}
