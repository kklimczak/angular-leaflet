import {Component} from '@angular/core';
import {MapOptions} from 'leaflet';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: MapOptions = {
    center: [51.759445, 19.457216],
    zoom: 13
  };

  visible = true;

  width = of(1000).pipe(
    delay(1000)
  );

  height = of(1000).pipe(
    delay(2000)
  );
  latLng = of([51.759445, 19.457216])
    .pipe(
      delay(2000)
    );
}
