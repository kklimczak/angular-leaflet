import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { BaseLayer } from '../../core/base-layer';
import { FeatureGroup, LayerGroup, Map } from 'leaflet';

@Component({
  selector: 'ngl-feature-group',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => FeatureGroupComponent) }]
})
export class FeatureGroupComponent extends BaseLayer<FeatureGroup> {
  @ContentChildren(BaseLayer) layers: QueryList<BaseLayer<any>>;

  layerIds: string[] = [];

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    this.layerRef = new FeatureGroup();
    this.mapRef.addLayer(this.layerRef);

    this.addLayers();

    this.initHandlers();

    this.layers.changes.subscribe(this.addLayers.bind(this));
  }

  private addLayers() {
    this.layers
      .filter(layer => layer.id !== this.id)
      .filter(layer => !this.layerIds.includes(layer.id))
      .forEach(this.addLayer.bind(this));
  }

  private addLayer(layer: BaseLayer<any>) {
    layer.addTo(this.layerRef);
    this.layerIds = [...this.layerIds, layer.id];
  }
}
