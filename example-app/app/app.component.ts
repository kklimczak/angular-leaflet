import {Component} from '@angular/core';
import {LeafletComponent} from 'angular-leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  component: LeafletComponent;
}
