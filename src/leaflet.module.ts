import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NglCoreModule, NglImageOverlayModule, NglMarkerModule, NglTileLayerModule, NglVectorsModule} from 'angular-leaflet';
import {NglGroupsModule} from './groups';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglGroupsModule,
    NglImageOverlayModule,
    NglMarkerModule,
    NglTileLayerModule,
    NglVectorsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    NglCoreModule,
    NglGroupsModule,
    NglImageOverlayModule,
    NglMarkerModule,
    NglTileLayerModule,
    NglVectorsModule
  ]
})
export class NglModule { }
