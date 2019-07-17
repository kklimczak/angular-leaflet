import { Component, forwardRef, Input } from '@angular/core';
import { imageOverlay, ImageOverlay, LatLngBounds, latLngBounds, LayerGroup, Map } from 'leaflet';
import { BaseLayer } from '../core/base-layer';

@Component({
  selector: 'ngl-image-overlay',
  template: '',
  providers: [{ provide: BaseLayer, useExisting: forwardRef(() => ImageOverlayComponent) }]
})
export class ImageOverlayComponent extends BaseLayer<ImageOverlay> {
  @Input() set src(value: string) {
    this._url = value;
    if (this.layerRef) {
      this.layerRef.setUrl(value);
    } else {
      this.prepareLayer();
    }
  }

  @Input() set width(value: number) {
    this._width = value;
    if (this.layerRef) {
      this.layerRef.setBounds(this.prepareBounds(this._width, this._height));
    } else {
      this.prepareLayer();
    }
  }

  @Input() set height(value: number) {
    this._height = value;
    if (this.layerRef) {
      this.layerRef.setBounds(this.prepareBounds(this._width, this._height));
    } else {
      this.prepareLayer();
    }
  }

  private _url: string;
  private _width: number;
  private _height: number;

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    this.prepareLayer();
  }

  prepareLayer() {
    if (this.mapRef && this._url && this._height && this._width) {
      this.layerRef = imageOverlay(this._url, this.prepareBounds(this._width, this._height));
      this.mapRef.addLayer(this.layerRef);
      this.initHandlers();
    }
  }

  private prepareBounds(width: number, height: number): LatLngBounds {
    const southWest = (this.mapRef as Map).unproject([0, height * 2], 1),
      northEast = (this.mapRef as Map).unproject([width * 2, 0], 1);

    return latLngBounds(southWest, northEast);
  }
}
