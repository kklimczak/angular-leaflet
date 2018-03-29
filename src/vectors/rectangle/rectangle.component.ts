import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {LatLngBounds, LayerGroup, Map, PathOptions, rectangle, Rectangle} from 'leaflet';
import {BaseLayer} from '../../core/base-layer';

@Component({
  selector: 'app-rectangle',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => RectangleComponent)}]
})
export class RectangleComponent extends BaseLayer {

  @Input() set bounds(value: LatLngBounds) {
    this._bounds = value;
    if (this.layer) {
      this.layer.setBounds(value);
    } else {
      this.createLayer();
    }
  }

  @Input() set options(value: PathOptions) {
    this._options = value;
    if (this.layer) {
      this.layer.setStyle(value);
    } else {
      this.createLayer();
    }
  }

  map: Map | LayerGroup;
  layer: Rectangle;

  private _bounds: LatLngBounds;
  private _options: PathOptions;

  constructor() {
    super();
  }

  createLayer() {
    if (this._bounds) {
      this.layer = rectangle(this._bounds, {
        ...this._options
      });
      this.map.addLayer(this.layer);
      this.initHandlers();
    }
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    if (!this.layer) {
      this.createLayer();
    }
  }
}
