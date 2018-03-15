import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TileLayerComponent} from './tile-layer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TileLayerComponent
  ],
  exports: [
    TileLayerComponent
  ]
})
export class TileLayerModule { }
