import {Map} from 'leaflet';

export abstract class MapHandler {
  leafletMap: Map;
  abstract initialize(map: Map): void;
}
