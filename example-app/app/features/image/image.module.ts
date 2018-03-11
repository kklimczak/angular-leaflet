import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {CoreModule, ImageOverlayModule, LeafletModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    CoreModule,
    ImageOverlayModule
  ],
  declarations: [ImageComponent]
})
export class ImageModule { }
