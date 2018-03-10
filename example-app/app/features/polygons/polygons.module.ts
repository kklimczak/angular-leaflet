import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './polygons.component';
import {LeafletModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule { }
