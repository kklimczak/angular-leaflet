import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './polygons.component';
import {CoreModule, LeafletModule, MarkerModule, TileLayerModule, VectorsModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    CoreModule,
    TileLayerModule,
    VectorsModule,
    MarkerModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule { }
