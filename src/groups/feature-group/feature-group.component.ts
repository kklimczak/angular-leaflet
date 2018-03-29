import {Component, ContentChildren, forwardRef, OnDestroy, QueryList} from '@angular/core';
import {BaseLayer} from '../../core/base-layer';
import {FeatureGroup, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'app-feature-group',
  templateUrl: './feature-group.component.html',
  styleUrls: ['./feature-group.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => FeatureGroupComponent)}]
})
export class FeatureGroupComponent extends BaseLayer {

  map: Map | LayerGroup;
  layer: FeatureGroup;

  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer>;

  constructor() {
    super();
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    this.layer = new FeatureGroup();
    this.map.addLayer(this.layer);

    this.layers
      .filter(layer => layer !== this)
      .forEach(layer => layer.addTo(this.layer));

    this.initHandlers();

    this.layers.changes
      .subscribe(() => this.layers
        .filter(layer => layer !== this)
        .forEach(layer => layer.addTo(this.layer)));
  }
}
