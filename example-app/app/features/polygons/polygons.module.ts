import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './polygons.component';
import {CoreModule, LeafletModule, TileLayerModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    CoreModule,
    TileLayerModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule { }
