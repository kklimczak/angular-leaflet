import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PolygonsComponent} from './polygons.component';
import {NglCoreModule, NglGroupsModule, NglMarkerModule, NglTileLayerModule, NglVectorsModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglTileLayerModule,
    NglVectorsModule,
    NglMarkerModule,
    NglGroupsModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule {
}
