import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';
import {LibModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LibModule
  ],
  declarations: [TilesComponent]
})
export class TilesModule { }
