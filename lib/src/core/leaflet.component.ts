import {AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';
import {map, Map, MapOptions} from 'leaflet';
import {BaseLayer} from './base-layer';
import {MapHandler} from './map-handler';

@Component({
  selector: 'ngl-leaflet',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: flex;
      flex: 1 1 auto;
    }
  `]
})
export class LeafletComponent implements OnInit, AfterContentInit {

  @Input() options: MapOptions;

  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer>;
  @ContentChildren(MapHandler, {descendants: true}) handlers: QueryList<MapHandler>;

  map: Map;
  layerIds: string[] = [];

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.map = map(this.elementRef.nativeElement, {
      ...this.options
    });
  }

  ngAfterContentInit() {
    this.addLayers();
    this.layers.changes
      .subscribe(this.addLayers.bind(this));

    this.handlers.forEach(handler => handler.initialize(this.map));
    this.handlers.changes
      .subscribe(() => this.handlers.forEach(handler => handler.initialize(this.map)));
  }

  private addLayers() {
    this.layers
      .filter(layer => !this.layerIds.includes(layer.id))
      .forEach(this.addLayer.bind(this));
  }

  private addLayer(layer: BaseLayer) {
    layer.addTo(this.map);
    this.layerIds = [...this.layerIds, layer.id];
  }
}
