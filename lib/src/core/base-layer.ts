import { Layer, LayerGroup, Map } from 'leaflet';
import { AfterContentInit, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { LayerHandler } from './layer-handler';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';

export class BaseLayer<T extends Layer> implements OnDestroy, AfterContentInit {
  id: string;
  mapRef: Map | LayerGroup;
  layerRef: T;
  handlerIds: string[] = [];
  handlerSubscription: Subscription;
  @ContentChildren(LayerHandler) handlers: QueryList<LayerHandler<any>>;

  constructor() {
    this.id = uuid();
  }

  addTo(map: Map | LayerGroup): void {
    this.mapRef = map;
  }

  removeFrom(): void {
    if (this.layerRef) {
      (this.mapRef as any).removeLayer(this.layerRef);
    }
  }

  ngAfterContentInit(): void {
    this.initHandlers();
    this.handlerSubscription = this.handlers.changes.subscribe(this.initHandlers.bind(this));
  }

  initHandlers() {
    this.handlers.filter(handler => !this.handlerIds.includes(handler.id)).forEach(this.initHandler.bind(this));
  }

  initHandler(handler: LayerHandler<any>) {
    handler.initialize(this.layerRef['_map'], this.layerRef);
    this.handlerIds = [...this.handlerIds, handler.id];
  }

  ngOnDestroy() {
    this.handlerSubscription.unsubscribe();
    this.removeFrom();
  }
}
