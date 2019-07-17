import { Component, forwardRef } from '@angular/core';
import { LayerHandler } from 'angular-leaflet';
import { Map, Marker } from 'leaflet';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [{ provide: LayerHandler, useExisting: forwardRef(() => EditComponent) }]
})
export class EditComponent extends LayerHandler<Marker> {
  initialize(mapRef: Map, layerRef: Marker<any>) {
    super.initialize(mapRef, layerRef);
    this.layerRef.dragging.enable();
  }
}
