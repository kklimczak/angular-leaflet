import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {divIcon, LatLngExpression, LayerGroup, Map, marker, Marker} from 'leaflet';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => MarkerComponent)}]
})
export class MarkerComponent implements BaseLayer, OnDestroy {

  @Input() set latLng(value: LatLngExpression) {
    this._latLng = value;
    this.prepareLayer();
  }

  map: Map | LayerGroup;
  layer: Marker;

  _latLng: LatLngExpression;

  constructor() { }

  private prepareLayer() {
    if (this.map && this._latLng) {
      if (this.layer) {
        this.layer.setLatLng(this._latLng);
      } else {
        this.createLayer();
      }
    }
  }

  private createLayer() {
    this.layer = marker(this._latLng, {
      icon: divIcon()
    });
    this.map.addLayer(this.layer);
  }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.prepareLayer();
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }

}
