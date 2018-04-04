import {AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';
import {map, Map, MapOptions} from 'leaflet';
import {BaseLayer} from './base-layer';
import {MapHandler} from './map-handler';

@Component({
  selector: 'app-leaflet',
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
  @ContentChildren(MapHandler) handlers: QueryList<MapHandler>;

  map: Map;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.map = map(this.elementRef.nativeElement, {
      ...this.options
    });
  }

  ngAfterContentInit() {
    this.layers.forEach(layer => layer.addTo(this.map));
    this.layers.changes
      .subscribe(() => this.layers.forEach(layer => layer.addTo(this.map)));

    this.handlers.forEach(handler => handler.initialize(this.map));
    this.handlers.changes
      .subscribe(() => this.handlers.forEach(handler => handler.initialize(this.map)));
  }

}
