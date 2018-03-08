import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {LibModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LibModule
  ],
  declarations: [ImageComponent]
})
export class ImageModule { }
