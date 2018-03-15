import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule, ImageOverlayModule, MarkerModule, TileLayerModule, VectorsModule} from 'angular-leaflet';
import {GroupsModule} from './groups';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    GroupsModule,
    ImageOverlayModule,
    MarkerModule,
    TileLayerModule,
    VectorsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    CoreModule,
    GroupsModule,
    ImageOverlayModule,
    MarkerModule,
    TileLayerModule,
    VectorsModule
  ]
})
export class LeafletModule { }
