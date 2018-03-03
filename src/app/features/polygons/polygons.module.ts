import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './polygons.component';
import {LibModule} from '../../lib/lib.module';

@NgModule({
  imports: [
    CommonModule,
    LibModule
  ],
  declarations: [PolygonsComponent]
})
export class PolygonsModule { }
