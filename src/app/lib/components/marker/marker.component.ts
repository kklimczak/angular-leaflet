import {Component, forwardRef, OnDestroy} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {divIcon, LayerGroup, Map, marker, Marker} from 'leaflet';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => MarkerComponent)}]
})
export class MarkerComponent implements BaseLayer, OnDestroy {

  map: Map | LayerGroup;
  layer: Marker;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.layer = marker([51.759445, 19.457216], {
      icon: divIcon()
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
