import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {BaseLayer} from '../base-layer';
import {imageOverlay, ImageOverlay, LatLngBounds, latLngBounds, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => ImageOverlayComponent)}]
})
export class ImageOverlayComponent implements  OnDestroy, BaseLayer {

  @Input() set src(value: string) {
    this._url = value;
    this.prepareLayer();
  }

  @Input() set width(value: string) {
    this._width = value;
    this.prepareLayer();
  }

  @Input() set height(value: string) {
    this._height = value;
    this.prepareLayer();
  }

  map: Map | LayerGroup;
  layer: ImageOverlay;

  private _url: string;
  private _width: string;
  private _height: string;

  constructor() { }

  addTo(map: Map | LayerGroup): void {
    this.map = map;
    this.prepareLayer();
  }

  prepareLayer() {
    if (this._url && this._height && this._width) {
      this.layer = imageOverlay(this._url, this.prepareBounds(500, 474));
      this.map.addLayer(this.layer);
    }
  }

  private prepareBounds(width: number, height: number): LatLngBounds {
    const southWest = (this.map as Map).unproject([0, height * 2], 1),
      northEast = (this.map as Map).unproject([width * 2, 0], 1),
      bounds = latLngBounds(southWest, northEast);

    (this.map as Map).fitBounds(bounds);

    // TODO kklimczak: change to optional
    // (this.map as Map).setMaxBounds(bounds);

    return bounds;
  }

  removeFrom(): void {
    (this.map as any).removeLayer(this.layer);
  }

  ngOnDestroy(): void {
    (this.map as any).removeLayer(this.layer);
  }

}
