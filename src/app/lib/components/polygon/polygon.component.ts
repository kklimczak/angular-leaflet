import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {LayerGroup, Map, polygon, Polygon} from 'leaflet';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => PolygonComponent)}]
})
export class PolygonComponent implements BaseLayer, OnDestroy {

  map: Map | LayerGroup;
  layer: Polygon;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.layer = polygon([[51.7894, 19.4972], [51.750, 19.435], [51.731, 19.471]]);
    this.map.addLayer(this.layer);
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }
}
