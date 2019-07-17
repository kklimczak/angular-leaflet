import { Layer, Map } from 'leaflet';
import { v4 as uuid } from 'uuid';

export class LayerHandler {
  id: string;

  constructor() {
    this.id = uuid();
  }

  initialize<T extends Layer>(mapRef: Map, layerRef: T) {}
}
