import { Layer, Map } from 'leaflet';
import { v4 as uuid } from 'uuid';

export class LayerHandler {
  id: string;

  constructor() {
    this.id = uuid();
  }

  initialize(map: Map, layer: Layer) {}
}
