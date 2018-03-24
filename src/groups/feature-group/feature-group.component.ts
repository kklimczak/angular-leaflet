import {Component, ContentChildren, forwardRef, OnDestroy, QueryList} from '@angular/core';
import {BaseLayer} from 'angular-leaflet';
import {FeatureGroup, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => FeatureGroupComponent)}]
})
export class FeatureGroupComponent implements BaseLayer, OnDestroy {

  map: Map | LayerGroup;
  layer: FeatureGroup;

  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer>;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.layer = new FeatureGroup();
    this.map.addLayer(this.layer);

    this.layers
      .filter(layer => layer !== this)
      .forEach(layer => layer.addTo(this.layer));

    this.layers.changes
      .subscribe(() => this.layers
        .filter(layer => layer !== this)
        .forEach(layer => layer.addTo(this.layer)));
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }

}
