import { Component } from '@angular/core';
import {MapOptions} from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  options: MapOptions = {
    center: [51.759445, 19.457216],
    zoom: 13
  };

  visible = true;
}
