import {AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';
import {map, Map, MapOptions} from 'leaflet';
import {BaseLayer} from '../base-layer';
import {FeatureGroupComponent} from '../feature-group/feature-group.component';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit, AfterContentInit {

  @Input() options: MapOptions;

  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer>;
  @ContentChildren(FeatureGroupComponent) groups: QueryList<FeatureGroupComponent>;

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

    this.groups.forEach(group => group.addTo(this.map));
    this.groups.changes
      .subscribe(() => this.groups.forEach(group => group.addTo(this.map)));
  }

}
