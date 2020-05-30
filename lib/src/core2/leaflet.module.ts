import { NgModule } from '@angular/core';
import { NglMapComponent } from './map.component';
import { TileLayerComponent } from './tile-layer.component';

@NgModule({
  declarations: [NglMapComponent, TileLayerComponent],
  exports: [NglMapComponent, TileLayerComponent]
})
export class LeafletModule {}
