import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersComponent } from './handlers.component';
import {NglCoreModule, NglMarkerModule, NglTileLayerModule} from 'angular-leaflet';
import { AddMarkerHandlerComponent } from './add-marker-handler/add-marker-handler.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglTileLayerModule,
    NglMarkerModule
  ],
  declarations: [HandlersComponent, AddMarkerHandlerComponent, EditComponent]
})
export class HandlersModule { }
