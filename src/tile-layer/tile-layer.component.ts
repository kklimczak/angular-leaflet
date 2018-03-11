import {Component, forwardRef, OnDestroy} from '@angular/core';
import {Layer, LayerGroup, Map, tileLayer} from 'leaflet';
import {BaseLayer} from 'angular-leaflet';

@Component({
  selector: 'app-tile-layer',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => TileLayerComponent)}]
})
export class TileLayerComponent implements OnDestroy, BaseLayer {

  map: Map | LayerGroup;
  layer: Layer;

  constructor() {
  }

  addTo(map: Map | LayerGroup) {
    if (!this.layer) {
      this.map = map;
      this.layer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      this.map.addLayer(this.layer);
    }
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }

}
