import {Component, ContentChildren, OnDestroy, QueryList} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {FeatureGroup, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss']
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

    this.layers.forEach(layer => layer.addTo(this.layer));

    this.layers.changes
      .subscribe(() => this.layers.forEach(layer => layer.addTo(this.layer)));
  }

  removeFrom() {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy() {
    this.removeFrom();
  }

}
