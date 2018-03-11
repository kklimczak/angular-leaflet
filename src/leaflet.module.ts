import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageOverlayComponent } from './components/image-overlay/image-overlay.component';
import {FeatureGroupComponent} from './components/feature-group/feature-group.component';
import {MarkerComponent} from './components/marker/marker.component';
import { PolylineComponent } from './components/polyline/polyline.component';
import { PolygonComponent } from './components/polygon/polygon.component';
import { RectangleComponent } from './components/rectangle/rectangle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureGroupComponent,
    MarkerComponent, ImageOverlayComponent, PolylineComponent, PolygonComponent, RectangleComponent],
  exports: [FeatureGroupComponent,
    MarkerComponent, ImageOverlayComponent, PolylineComponent, PolygonComponent, RectangleComponent]
})
export class LeafletModule { }
