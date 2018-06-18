import { Component, OnInit } from '@angular/core';
import {CRS, MapOptions} from 'leaflet';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  options: MapOptions = {
    center: [0, 0],
    zoom: -2,
    minZoom: -2,
    crs: CRS.Simple
  };

  width = 1000;
  height = 948;

  url$ = new BehaviorSubject('https://simplemaps.com/static/svg/pl/pl.svg');

  loaded = of(true)
    .pipe(
      delay(3000),
    );

  constructor() { }

  getUrl() {
    return this.url$.asObservable();
  }

  ngOnInit() {
    setTimeout(() => this.url$
      .next('https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/' +
        'POLSKA_mapa_woj_z_powiatami.png/646px-POLSKA_mapa_woj_z_powiatami.png'), 5000);
  }

}
