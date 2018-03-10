import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import {LeafletModule} from 'angular-leaflet';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule
  ],
  declarations: [ImageComponent]
})
export class ImageModule { }
