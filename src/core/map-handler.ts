import {Map} from 'leaflet';
import {Input} from '@angular/core';

export abstract class MapHandler {
  map: Map;
  abstract initialize(map: Map): void;
}
