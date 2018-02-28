import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {Layer, LayerGroup, Map, tileLayer} from 'leaflet';

@Component({
  selector: 'app-tile-layer',
  templateUrl: './tile-layer.component.html',
  styleUrls: ['./tile-layer.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => TileLayerComponent)}]
})
export class TileLayerComponent implements OnInit, OnDestroy, BaseLayer {

  map: Map | LayerGroup;
  layer: Layer;

  constructor() {
  }

  addTo(map: Map | LayerGroup) {
    if (!this.layer) {
      this.map = map;
      this.layer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      this.map.addLayer(this.layer);
    }
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.removeFrom();
  }

}
