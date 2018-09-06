import {Component, forwardRef, Input} from '@angular/core';
import {imageOverlay, ImageOverlay, LatLngBounds, latLngBounds, LayerGroup, Map} from 'leaflet';
import {BaseLayer} from '../core/base-layer';

@Component({
  selector: 'app-image-overlay',
  template: '',
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => ImageOverlayComponent)}]
})
export class ImageOverlayComponent extends BaseLayer {

  @Input() set src(value: string) {
    this._url = value;
    if (this.layer) {
      this.layer.setUrl(value);
    } else {
      this.prepareLayer();
    }
  }

  @Input() set width(value: number) {
    this._width = value;
    if (this.layer) {
      this.layer.setBounds(this.prepareBounds(this._width, this._height));
    } else {
      this.prepareLayer();
    }
  }

  @Input() set height(value: number) {
    this._height = value;
    if (this.layer) {
      this.layer.setBounds(this.prepareBounds(this._width, this._height));
    } else {
      this.prepareLayer();
    }
  }

  layer: ImageOverlay;

  private _url: string;
  private _width: number;
  private _height: number;

  constructor() {
    super();
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    this.prepareLayer();
  }

  prepareLayer() {
    if (this.map && this._url && this._height && this._width) {
      this.layer = imageOverlay(this._url, this.prepareBounds(this._width, this._height));
      this.map.addLayer(this.layer);
      this.initHandlers();
    }
  }

  private prepareBounds(width: number, height: number): LatLngBounds {
    const southWest = (this.map as Map).unproject([0, height * 2], 1),
      northEast = (this.map as Map).unproject([width * 2, 0], 1);

    return latLngBounds(southWest, northEast);
  }
}
