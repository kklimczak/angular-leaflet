import { Component, forwardRef, Input } from '@angular/core';
import { LatLngBounds, LayerGroup, Map, PathOptions, rectangle, Rectangle } from 'leaflet';
import { BaseLayer } from '../../core/base-layer';

@Component({
  selector: 'ngl-rectangle',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => RectangleComponent) }]
})
export class RectangleComponent extends BaseLayer<Rectangle> {
  @Input() set bounds(value: LatLngBounds) {
    this._bounds = value;
    if (this.layerRef) {
      this.layerRef.setBounds(value);
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

  private _bounds: LatLngBounds;
  private _options: PathOptions;

  createLayer() {
    if (this.mapRef && this._bounds) {
      this.layerRef = rectangle(this._bounds, {
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
