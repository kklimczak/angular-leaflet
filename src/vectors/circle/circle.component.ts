import {Component, forwardRef, OnInit} from '@angular/core';
import {BaseLayer} from '../../core/base-layer';
import {circle, Circle, LayerGroup, Map} from 'leaflet';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  providers: [{provide: BaseLayer, useExisting: forwardRef(() => CircleComponent)}]
})
export class CircleComponent extends BaseLayer {

  layer: Circle;

  constructor() {
    super();
  }

  addTo(map: Map | LayerGroup): void {
    super.addTo(map);
    if (!this.layer) {
      this.layer = circle([51.759445, 19.457216], {radius: 1000});
      this.map.addLayer(this.layer);
      this.initHandlers();
    }
  }
}
