import { Component, forwardRef, Input } from '@angular/core';
import { divIcon, LatLngExpression, LayerGroup, Map, marker, Marker } from 'leaflet';
import { BaseLayer } from '../core/base-layer';

@Component({
  selector: 'ngl-marker',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => MarkerComponent) }]
})
export class MarkerComponent extends BaseLayer<Marker> {
  @Input() set latLng(value: LatLngExpression) {
    this._latLng = value;
    this.prepareLayer();
  }

  _latLng: LatLngExpression;

  private prepareLayer() {
    if (this.mapRef && this._latLng) {
      if (this.layerRef) {
        this.layerRef.setLatLng(this._latLng);
      } else {
        this.createLayer();
      }
    }
  }

  private createLayer() {
    this.layerRef = marker(this._latLng, {
      icon: divIcon()
    });
    this.mapRef.addLayer(this.layerRef);
    this.initHandlers();
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    this.prepareLayer();
  }
}
