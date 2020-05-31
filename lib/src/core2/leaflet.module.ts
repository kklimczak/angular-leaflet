import { NgModule } from '@angular/core';
import { NglMapComponent } from './map.component';
import { TileLayerComponent } from './tile-layer.component';
import { NglMarkerComponent } from './marker.component';

@NgModule({
  declarations: [NglMapComponent, TileLayerComponent, NglMarkerComponent],
  exports: [NglMapComponent, TileLayerComponent, NglMarkerComponent]
})
export class LeafletModule {}
