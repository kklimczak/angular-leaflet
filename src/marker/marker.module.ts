import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkerComponent} from './marker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarkerComponent
  ],
  exports: [
    MarkerComponent
  ]
})
export class NglMarkerModule { }
