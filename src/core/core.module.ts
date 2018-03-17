import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeafletComponent} from './leaflet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeafletComponent
  ],
  exports: [
    LeafletComponent
  ]
})
export class NglCoreModule { }
