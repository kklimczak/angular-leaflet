import { Map } from 'leaflet';
import { v4 as uuid } from 'uuid';

export class MapHandler {
  id: string;

  constructor() {
    this.id = uuid();
  }

  initialize(mapRef: Map): void {}
}
