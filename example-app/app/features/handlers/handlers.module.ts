import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersComponent } from './handlers.component';
import {NglCoreModule, NglTileLayerModule} from 'angular-leaflet';
import { AddMarkerHandlerComponent } from './add-marker-handler/add-marker-handler.component';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglTileLayerModule
  ],
  declarations: [HandlersComponent, AddMarkerHandlerComponent]
})
export class HandlersModule { }
