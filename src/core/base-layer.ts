import {Layer, LayerGroup, Map} from 'leaflet';
import {ContentChildren, OnDestroy, QueryList} from '@angular/core';
import {LayerHandler} from './layer-handler';

export class BaseLayer implements OnDestroy {
  map: Map | LayerGroup;
  layer: Layer;
  @ContentChildren(LayerHandler) handlers: QueryList<LayerHandler>;

  addTo(map: Map | LayerGroup): void {
    this.map = map;
  }

  removeFrom(): void {
    if (this.layer) {
      (this.map as any).removeLayer(this.layer);
    }
  }

  initHandlers() {
    this.handlers.forEach(handler => handler.initialize(this.layer['_map'], this.layer));
  }

  ngOnDestroy() {
    this.removeFrom();
  }
}
