import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { TileLayerComponent } from './components/tile-layer/tile-layer.component';
import { ImageOverlayComponent } from './components/image-overlay/image-overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeafletComponent, TileLayerComponent, ImageOverlayComponent],
  exports: [LeafletComponent, TileLayerComponent, ImageOverlayComponent]
})
export class LibModule { }
