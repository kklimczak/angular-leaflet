import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './polygons.component';
import {NglCoreModule, NglModule, NglMarkerModule, NglTileLayerModule, NglVectorsModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglTileLayerModule,
    NglVectorsModule,
    NglMarkerModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule { }
