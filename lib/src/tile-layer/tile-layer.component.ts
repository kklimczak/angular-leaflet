import { Component, forwardRef } from '@angular/core';
import { LayerGroup, Map, TileLayer, tileLayer } from 'leaflet';
import { BaseLayer } from '../core/base-layer';

@Component({
  selector: 'ngl-tile-layer',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => TileLayerComponent) }]
})
export class TileLayerComponent extends BaseLayer<TileLayer> {
  addTo(map: Map | LayerGroup) {
    super.addTo(map);
    if (!this.layerRef) {
      this.layerRef = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      this.mapRef.addLayer(this.layerRef);
      this.initHandlers();
    }
  }
}
