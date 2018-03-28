import {Layer, LayerGroup, Map} from 'leaflet';
import {ContentChildren, QueryList} from '@angular/core';
import {LayerHandler} from './layer-handler';

export class BaseLayer {
  map: Map | LayerGroup;
  layer: Layer;
  @ContentChildren(LayerHandler) handlers: QueryList<LayerHandler>;

  addTo(map: Map | LayerGroup): void {}
  removeFrom(): void {}

  initHandlers() {
    this.handlers.forEach(handler => handler.initialize(this.layer['_map'], this.layer));
  }
}
