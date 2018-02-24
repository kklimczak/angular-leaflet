import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {map, Map} from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit, AfterViewInit {

  map: Map;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.map = map(this.elementRef.nativeElement, {});
  }

}
