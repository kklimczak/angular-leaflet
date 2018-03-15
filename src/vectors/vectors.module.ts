import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PolygonComponent} from './polygon/polygon.component';
import {PolylineComponent} from './polyline/polyline.component';
import {RectangleComponent} from './rectangle/rectangle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PolygonComponent,
    PolylineComponent,
    RectangleComponent
  ],
  exports: [
    PolygonComponent,
    PolylineComponent,
    RectangleComponent
  ]
})
export class VectorsModule { }
