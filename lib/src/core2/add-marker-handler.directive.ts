import { Directive } from '@angular/core';
import { NglParent } from './ngl-parent';
import { LeafletMouseEvent, marker, divIcon } from 'leaflet';

@Directive({
  selector: '[nglAddMarker]'
})
export class NglAddMarkerHandlerComponent {
  constructor(private parent: NglParent) {
    this.parent.initialized$.subscribe(() => {
      console.log(this.parent.mapRef);

      this.parent.mapRef.on('click', ({ latlng }: LeafletMouseEvent) =>
        marker(latlng, { icon: divIcon() }).addTo(this.parent.mapRef)
      );
    });
  }
}
