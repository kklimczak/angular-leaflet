import { Component, OnInit } from '@angular/core';
import {MapOptions} from 'leaflet';

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

  constructor() { }

  ngOnInit() {
  }

}
