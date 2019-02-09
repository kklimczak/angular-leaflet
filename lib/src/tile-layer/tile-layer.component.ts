import { Component, forwardRef } from '@angular/core';
import { Layer, LayerGroup, Map, tileLayer } from 'leaflet';
import { BaseLayer } from '../core/base-layer';

@Component({
  selector: 'ngl-tile-layer',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => TileLayerComponent) }]
})
export class TileLayerComponent extends BaseLayer {
  map: Map | LayerGroup;
  layer: Layer;

  constructor() {
    super();
  }

  addTo(map: Map | LayerGroup) {
    super.addTo(map);
    if (!this.layer) {
      this.layer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      this.map.addLayer(this.layer);
      this.initHandlers();
    }
  }
}
