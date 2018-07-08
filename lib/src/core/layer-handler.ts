import {Layer, Map} from 'leaflet';

export abstract class LayerHandler {
  leafletMap: Map;
  layer: Layer;
  abstract initialize(map: Map, layer: Layer);
}
