import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {NglCoreModule, NglImageOverlayModule, NglModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    NglCoreModule,
    NglImageOverlayModule
  ],
  declarations: [ImageComponent]
})
export class ImageModule { }
