import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet/leaflet.component';
import { TileLayerComponent } from './components/tile-layer/tile-layer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeafletComponent, TileLayerComponent],
  exports: [LeafletComponent, TileLayerComponent]
})
export class LibModule { }
