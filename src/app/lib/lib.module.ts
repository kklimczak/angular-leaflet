import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { TileLayerComponent } from './components/tile-layer/tile-layer.component';
import { ImageOverlayComponent } from './components/image-overlay/image-overlay.component';
import {FeatureGroupComponent} from './components/feature-group/feature-group.component';
import {MarkerComponent} from './components/marker/marker.component';
import { PolylineComponent } from './components/polyline/polyline.component';
import { PolygonComponent } from './components/polygon/polygon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeafletComponent, TileLayerComponent, FeatureGroupComponent,
    MarkerComponent, ImageOverlayComponent, PolylineComponent, PolygonComponent],
  exports: [LeafletComponent, TileLayerComponent, FeatureGroupComponent,
    MarkerComponent, ImageOverlayComponent, PolylineComponent, PolygonComponent]
})
export class LibModule { }
