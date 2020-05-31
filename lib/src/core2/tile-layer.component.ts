import { Component, Input } from '@angular/core';
import { TileLayer, tileLayer } from 'leaflet';
import { NglLayer } from './ngl-layer';
import { asLayer } from './tokens';

@Component({
  selector: 'ngl-tile-layer',
  template: '',
  providers: [asLayer(TileLayerComponent)]
})
export class TileLayerComponent extends NglLayer<TileLayer> {
  @Input() url: string = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  addLayer() {
    this.layerRef = tileLayer(this.url);
    this.parent.attach(this.layerRef);
  }

  removeLayer() {}
}
