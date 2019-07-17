import { Layer, Map } from 'leaflet';
import { v4 as uuid } from 'uuid';

export class LayerHandler<T extends Layer> {
  id: string;
  mapRef: Map;
  layerRef: T;

  constructor() {
    this.id = uuid();
  }

  initialize(mapRef: Map, layerRef: T) {
    this.mapRef = mapRef;
    this.layerRef = layerRef;
  }
}
