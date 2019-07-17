import { Component, forwardRef, OnDestroy } from '@angular/core';
import { MapHandler } from 'angular-leaflet';
import { divIcon, LeafletMouseEvent, Map, marker } from 'leaflet';

@Component({
  selector: 'app-add-marker-handler',
  templateUrl: './add-marker-handler.component.html',
  styleUrls: ['./add-marker-handler.component.scss'],
  providers: [{ provide: MapHandler, useExisting: forwardRef(() => AddMarkerHandlerComponent) }]
})
export class AddMarkerHandlerComponent extends MapHandler implements OnDestroy {
  initialize(mapRef: Map): void {
    super.initialize(mapRef);
    this.mapRef.on('click', this.createMarkerOnClick, this);
  }

  ngOnDestroy(): void {
    this.mapRef.off('click', this.createMarkerOnClick, this);
  }

  private createMarkerOnClick(event: LeafletMouseEvent) {
    this.mapRef.addLayer(
      marker(event.latlng, {
        icon: divIcon()
      })
    );
  }
}
