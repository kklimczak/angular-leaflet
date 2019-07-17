import { Component, forwardRef, Input } from '@angular/core';
import { LatLngExpression, LayerGroup, Map, PathOptions, polyline, Polyline } from 'leaflet';
import { BaseLayer } from '../../core/base-layer';

@Component({
  selector: 'ngl-polyline',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => PolylineComponent) }]
})
export class PolylineComponent extends BaseLayer<Polyline> {
  @Input() set coordinates(value: LatLngExpression[]) {
    this._coordinates = value;
    if (this.layerRef) {
      this.layerRef.setLatLngs(value);
    } else {
      this.createLayer();
    }
  }

  @Input() set options(value: PathOptions) {
    this._options = value;
    if (this.layerRef) {
      this.layerRef.setStyle(value);
    } else {
      this.createLayer();
    }
  }

  private _coordinates: LatLngExpression[];
  private _options: PathOptions;

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    if (!this.layerRef && this._coordinates) {
      this.createLayer();
    }
  }

  private createLayer() {
    if (this.mapRef && this._coordinates) {
      this.layerRef = polyline(this._coordinates, {
        ...this._options
      });
      this.mapRef.addLayer(this.layerRef);
      this.initHandlers();
    }
  }
}
