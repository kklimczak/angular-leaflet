import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageOverlayComponent} from './image-overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageOverlayComponent
  ],
  exports: [
    ImageOverlayComponent
  ]
})
export class ImageOverlayModule { }
