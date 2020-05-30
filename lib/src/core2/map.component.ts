import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { map, MapOptions } from 'leaflet';
import { NglParent } from './ngl-parent';
import { asParent } from './tokens';

@Component({
  selector: 'ngl-map',
  template: '',
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        height: 100%;
      }
    `
  ],
  providers: [asParent(NglMapComponent)]
})
export class NglMapComponent extends NglParent implements OnInit {
  @Input() options: MapOptions;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    this.createMapInstance();
    this.markAsInitialized();
  }

  private createMapInstance() {
    this.mapRef = map(this.elementRef.nativeElement, this.options);
  }
}
