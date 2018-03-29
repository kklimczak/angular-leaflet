import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {MapHandler} from 'angular-leaflet';
import {divIcon, LeafletMouseEvent, Map, marker} from 'leaflet';

@Component({
  selector: 'app-add-marker-handler',
  templateUrl: './add-marker-handler.component.html',
  styleUrls: ['./add-marker-handler.component.scss'],
  providers: [{provide: MapHandler, useExisting: forwardRef(() => AddMarkerHandlerComponent)}]
})
export class AddMarkerHandlerComponent implements MapHandler, OnInit {

  map: Map;

  constructor() { }

  initialize(map: Map): void {
    this.map = map;
    this.map.on('click', (event: LeafletMouseEvent) => {
      this.map.addLayer(marker(event.latlng, {
        icon: divIcon()
      }));
    });
  }

  ngOnInit() {
  }

}
