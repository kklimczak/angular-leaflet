import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {LatLngExpression, LayerGroup, Map, PathOptions, polyline, Polyline} from 'leaflet';
import {BaseLayer} from 'angular-leaflet';

@Component({
  selector: 'app-polyline',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => PolylineComponent)}]
})
export class PolylineComponent implements BaseLayer, OnDestroy {

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
  layer: Polyline;

  private _coordinates: LatLngExpression[];
  private _options: PathOptions;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    if (!this.layer && this._coordinates) {
      this.createLayer();
    }
  }

  private createLayer() {
    if (this.map && this._coordinates) {
      this.layer = polyline(this._coordinates, {
        ...this._options
      });
      this.map.addLayer(this.layer);
    }
  }

  removeFrom(): void {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }

}
