import { Component, OnInit } from '@angular/core';
import {MapOptions} from 'leaflet';

@Component({
  selector: 'app-handlers',
  templateUrl: './handlers.component.html',
  styleUrls: ['./handlers.component.scss']
})
export class HandlersComponent implements OnInit {

  options: MapOptions = {
    center: [51.759445, 19.457216],
    zoom: 13
  };

  constructor() { }

  ngOnInit() {
  }

}
