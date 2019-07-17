import { Map } from 'leaflet';
import { v4 as uuid } from 'uuid';

export class MapHandler {
  id: string;
  mapRef: Map;

  constructor() {
    this.id = uuid();
  }

  initialize(mapRef: Map): void {
    this.mapRef = mapRef;
  }
}
