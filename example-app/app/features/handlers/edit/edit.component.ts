import {Component, forwardRef, OnInit} from '@angular/core';
import {LayerHandler} from 'angular-leaflet';
import {Layer, LayerGroup, Map, Marker} from 'leaflet';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [{provide: LayerHandler, useExisting: forwardRef(() => EditComponent)}]
})
export class EditComponent implements LayerHandler, OnInit {

  map: Map;
  layer: Layer;

  constructor() { }

  initialize(map: Map, layer: Layer) {
    this.layer = layer;
    this.map = map;
    if (layer instanceof Marker) {
      (layer as Marker).dragging.enable();
    }
  }

  ngOnInit() {
  }

}
