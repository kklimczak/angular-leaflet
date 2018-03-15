import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {LatLngBounds, LayerGroup, Map, PathOptions, rectangle, Rectangle} from 'leaflet';
import {BaseLayer} from 'angular-leaflet';

@Component({
  selector: 'app-rectangle',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => RectangleComponent)}]
})
export class RectangleComponent implements BaseLayer, OnDestroy {

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

  constructor() { }

  createLayer() {
    if (this._bounds) {
      this.layer = rectangle(this._bounds, {
        ...this._options
      });
      this.map.addLayer(this.layer);
    }
  }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    if (!this.layer) {
      this.createLayer();
    }
  }

  removeFrom(): void {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }
}
