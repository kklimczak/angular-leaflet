import {AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';
import {map, Map, MapOptions} from 'leaflet';
import {BaseLayer} from './base-layer';
// import {FeatureGroupComponent} from '../feature-group/feature-group.component';

@Component({
  selector: 'app-leaflet',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
    display: flex;
    width: 100%;
    height: 100%;
    }
  `]
})
export class LeafletComponent implements OnInit, AfterContentInit {

  @Input() options: MapOptions;

  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer>;
  // TODO kklimczak: make external class for map and group with methods to adding nested layers
  // @ContentChildren(FeatureGroupComponent) groups: QueryList<FeatureGroupComponent>;

  map: Map;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.map = map(this.elementRef.nativeElement, {
      ...this.options
    });
  }

  ngAfterContentInit() {
    this.layers.forEach(layer => layer.addTo(this.map));
    this.layers.changes
      .subscribe(() => this.layers.forEach(layer => layer.addTo(this.map)));

    // this.groups.forEach(group => group.addTo(this.map));
    // this.groups.changes
    //   .subscribe(() => this.groups.forEach(group => group.addTo(this.map)));
  }

}
