import { Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { LatLngExpression, LayerGroup, Map, PathOptions, polygon, Polygon } from 'leaflet';
import { BaseLayer } from '../../core/base-layer';

@Component({
  selector: 'ngl-polygon',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => PolygonComponent) }]
})
export class PolygonComponent extends BaseLayer<Polygon> {
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

  createLayer() {
    if (this.mapRef && this._coordinates) {
      this.layerRef = polygon(this._coordinates, {
        ...this._options
      });
      this.mapRef.addLayer(this.layerRef);
      this.initHandlers();
    }
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    if (!this.layerRef) {
      this.createLayer();
    }
  }
}
