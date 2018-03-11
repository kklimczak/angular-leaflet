import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';
import {TileLayerModule} from 'angular-leaflet';
import {CoreModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TileLayerModule
  ],
  declarations: [TilesComponent]
})
export class TilesModule { }
