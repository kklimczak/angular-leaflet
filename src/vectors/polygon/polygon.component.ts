import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {LatLngExpression, LayerGroup, Map, PathOptions, polygon, Polygon} from 'leaflet';
import {BaseLayer} from 'angular-leaflet';

@Component({
  selector: 'app-polygon',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => PolygonComponent)}]
})
export class PolygonComponent implements BaseLayer, OnDestroy {

  @Input() set coordinates(value: LatLngExpression[]) {
    this._coordinates = value;
    if (this.layer) {
      this.layer.setLatLngs(value);
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
  layer: Polygon;

  private _coordinates: LatLngExpression[];
  private _options: PathOptions;

  constructor() { }

  createLayer() {
    if (this.map && this._coordinates) {
      this.layer = polygon(this._coordinates, {
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

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }
}
