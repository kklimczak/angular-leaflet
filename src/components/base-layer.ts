import {LayerGroup, Map} from 'leaflet';

export abstract class BaseLayer {
  map: Map | LayerGroup;
  abstract addTo(map: Map | LayerGroup): void;
  abstract removeFrom(): void;
}
