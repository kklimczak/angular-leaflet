import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersComponent } from './handlers.component';
import {NglCoreModule, NglTileLayerModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglTileLayerModule
  ],
  declarations: [HandlersComponent]
})
export class HandlersModule { }
