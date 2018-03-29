import {Component, forwardRef, Input} from '@angular/core';
import {BaseLayer} from '../../core/base-layer';
import {circle, Circle, LatLngExpression, LayerGroup, Map, PathOptions} from 'leaflet';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => CircleComponent)}]
})
export class CircleComponent extends BaseLayer {

  @Input() set center(value: LatLngExpression) {
    this._center = value;
    if (this.layer) {
      this.layer.setLatLng(value);
    } else {
      this.createLayer();
    }
  }

  @Input() set radius(value: number) {
    this._radius = value;
    if (this.layer) {
      this.layer.setRadius(value);
    } else {
      this.createLayer();
    }
  }

  @Input() set options(value: PathOptions) {
    this._options = value;
    if (this.layer) {
      this.layer.setStyle(value);
    }
  }

  layer: Circle;

  private _center: LatLngExpression;
  private _radius: number;
  private _options: PathOptions;

  constructor() {
    super();
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    if (!this.layer) {
      this.createLayer();
    }
  }

  private createLayer() {
    if (this.map && this._center && this._radius) {
      this.layer = circle(this._center, {
        ...this._options,
        radius: this._radius
      });
      this.map.addLayer(this.layer);
      this.initHandlers();
    }
  }
}
