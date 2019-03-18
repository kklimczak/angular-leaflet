import { Component, forwardRef } from '@angular/core';
import { LayerHandler } from 'angular-leaflet';
import { Layer, Map, Marker } from 'leaflet';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [{ provide: LayerHandler, useExisting: forwardRef(() => EditComponent) }]
})
export class EditComponent extends LayerHandler {
  constructor() {
    super();
  }

  initialize(map: Map, layer: Layer) {
    if (layer instanceof Marker) {
      (layer as Marker).dragging.enable();
    }
  }
}
