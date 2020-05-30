import { Component } from '@angular/core';
import { NglParent } from './ngl-parent';
import { TileLayer } from 'leaflet';

@Component({
  selector: 'ngl-tile-layer',
  template: ''
})
export class TileLayerComponent {
  constructor(private parent: NglParent) {
    this.parent.initialized$.subscribe(() => console.log('parent'));
  }
}
