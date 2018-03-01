import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { TileLayerComponent } from './components/tile-layer/tile-layer.component';
import { FeatureGroupComponent } from './components/feature-group/feature-group.component';
import { MarkerComponent } from './components/marker/marker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeafletComponent, TileLayerComponent, FeatureGroupComponent, MarkerComponent],
  exports: [LeafletComponent, TileLayerComponent, FeatureGroupComponent, MarkerComponent]
})
export class LibModule { }
