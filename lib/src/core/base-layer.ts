import { Layer, LayerGroup, Map } from 'leaflet';
import { AfterContentInit, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { LayerHandler } from './layer-handler';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';

export class BaseLayer implements OnDestroy, AfterContentInit {
  id: string;
  map: Map | LayerGroup;
  layer: Layer;
  handlerIds: string[] = [];
  handlerSubscription: Subscription;
  @ContentChildren(LayerHandler) handlers: QueryList<LayerHandler>;

  constructor() {
    this.id = uuid();
  }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
  }

  removeFrom(): void {
    if (this.layer) {
      (this.map as any).removeLayer(this.layer);
    }
  }

  ngAfterContentInit(): void {
    this.initHandlers();
    this.handlerSubscription = this.handlers.changes.subscribe(this.initHandlers.bind(this));
  }

  initHandlers() {
    this.handlers.filter(handler => !this.handlerIds.includes(handler.id)).forEach(this.initHandler.bind(this));
  }

  initHandler(handler: LayerHandler) {
    handler.initialize(this.layer['_map'], this.layer);
    this.handlerIds = [...this.handlerIds, handler.id];
  }

  ngOnDestroy() {
    this.handlerSubscription.unsubscribe();
    this.removeFrom();
  }
}
