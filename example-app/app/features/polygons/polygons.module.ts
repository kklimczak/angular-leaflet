import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './polygons.component';
import {CoreModule, LeafletModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    CoreModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule { }
