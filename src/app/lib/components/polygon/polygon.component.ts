import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {LatLngExpression, LayerGroup, Map, PathOptions, polygon, Polygon} from 'leaflet';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => PolygonComponent)}]
})
export class PolygonComponent implements BaseLayer, OnDestroy {

  @Input() set coordinates(value: LatLngExpression[]) {
    this._coordinates = value;
  }
  @Input() set options(value: PathOptions) {
    this._options = value;
  }

  map: Map | LayerGroup;
  layer: Polygon;

  private _coordinates: LatLngExpression[];
  private _options: PathOptions;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.layer = polygon(this._coordinates, {
      ...this._options
    });
    this.map.addLayer(this.layer);
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }
}
