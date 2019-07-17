import { Component, forwardRef, Input } from '@angular/core';
import { BaseLayer } from '../../core/base-layer';
import { circle, Circle, LatLngExpression, LayerGroup, Map, PathOptions } from 'leaflet';

@Component({
  selector: 'ngl-circle',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => CircleComponent) }]
})
export class CircleComponent extends BaseLayer<Circle> {
  @Input() set center(value: LatLngExpression) {
    this._center = value;
    if (this.layerRef) {
      this.layerRef.setLatLng(value);
    } else {
      this.createLayer();
    }
  }

  @Input() set radius(value: number) {
    this._radius = value;
    if (this.layerRef) {
      this.layerRef.setRadius(value);
    } else {
      this.createLayer();
    }
  }

  @Input() set options(value: PathOptions) {
    this._options = value;
    if (this.layerRef) {
      this.layerRef.setStyle(value);
    }
  }

  private _center: LatLngExpression;
  private _radius: number;
  private _options: PathOptions;

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    if (!this.layerRef) {
      this.createLayer();
    }
  }

  private createLayer() {
    if (this.mapRef && this._center && this._radius) {
      this.layerRef = circle(this._center, {
        ...this._options,
        radius: this._radius
      });
      this.mapRef.addLayer(this.layerRef);
      this.initHandlers();
    }
  }
}
