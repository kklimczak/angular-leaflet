import {Component, ContentChildren, forwardRef, OnDestroy, QueryList} from '@angular/core';
import {BaseLayer} from '../../core/base-layer';
import {FeatureGroup, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'ngl-feature-group',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => FeatureGroupComponent)}]
})
export class FeatureGroupComponent extends BaseLayer {

  map: Map | LayerGroup;
  layer: FeatureGroup;
  layerIds: string[] = [];

  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer>;

  constructor() {
    super();
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    this.layer = new FeatureGroup();
    this.map.addLayer(this.layer);

    this.addLayers();

    this.initHandlers();

    this.layers.changes
      .subscribe(this.addLayers.bind(this));
  }

  private addLayers() {
    this.layers
      .filter(layer => layer.id !== this.id)
      .filter(layer => !this.layerIds.includes(layer.id))
      .forEach(this.addLayer.bind(this));
  }

  private addLayer(layer: BaseLayer) {
    layer.addTo(this.layer);
    this.layerIds = [...this.layerIds, layer.id];
  }
}
