import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';
import {LeafletModule} from 'angular-leaflet';
import {CoreModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    CoreModule
  ],
  declarations: [TilesComponent]
})
export class TilesModule { }
