import {Layer, Map} from 'leaflet';

export abstract class LayerHandler {
  map: Map;
  layer: Layer;
  abstract initialize(map: Map, layer: Layer);
}
