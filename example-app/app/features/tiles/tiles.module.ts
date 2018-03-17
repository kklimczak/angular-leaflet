import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';
import {NglTileLayerModule} from 'angular-leaflet';
import {NglCoreModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglTileLayerModule
  ],
  declarations: [TilesComponent]
})
export class TilesModule { }
