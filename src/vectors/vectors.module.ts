import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PolygonComponent} from './polygon/polygon.component';
import {PolylineComponent} from './polyline/polyline.component';
import {RectangleComponent} from './rectangle/rectangle.component';
import {CircleComponent} from './circle/circle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PolygonComponent,
    PolylineComponent,
    RectangleComponent,
    CircleComponent
  ],
  exports: [
    PolygonComponent,
    PolylineComponent,
    RectangleComponent,
    CircleComponent
  ]
})
export class NglVectorsModule { }
