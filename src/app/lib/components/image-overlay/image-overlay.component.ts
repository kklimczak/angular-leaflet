import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {imageOverlay, ImageOverlay, latLngBounds, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => ImageOverlayComponent)}]
})
export class ImageOverlayComponent implements  OnDestroy, BaseLayer {

  @Input() url: string;

  map: Map | LayerGroup;

  layer: ImageOverlay;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.layer = imageOverlay(this.url, latLngBounds([[100, 100], [200, 200]]));
    this.map.addLayer(this.layer);
    console.log('test');
    console.log(this.layer);
  }

  removeFrom(): void {
  }

  ngOnDestroy(): void {
    (this.map as any).removeLayer(this.layer);
  }

}
