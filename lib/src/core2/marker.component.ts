import { Component } from '@angular/core';
import { divIcon, Marker, marker } from 'leaflet';
import { NglLayer } from './ngl-layer';
import { asLayer } from './tokens';

@Component({
  selector: 'ngl-marker',
  template: '',
  providers: [asLayer(NglMarkerComponent)]
})
export class NglMarkerComponent extends NglLayer<Marker> {
  addLayer() {
    this.layerRef = marker([51.759445, 19.457216], { icon: divIcon() });
    this.parent.attach(this.layerRef);
    this.markAsInitialized();
  }

  removeLayer() {}
}
