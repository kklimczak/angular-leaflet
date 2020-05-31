import { NgModule } from '@angular/core';
import { NglMapComponent } from './map.component';
import { TileLayerComponent } from './tile-layer.component';
import { NglMarkerComponent } from './marker.component';
import { NglAddMarkerHandlerComponent } from './add-marker-handler.directive';

@NgModule({
  declarations: [NglMapComponent, TileLayerComponent, NglMarkerComponent, NglAddMarkerHandlerComponent],
  exports: [NglMapComponent, TileLayerComponent, NglMarkerComponent, NglAddMarkerHandlerComponent]
})
export class LeafletModule {}
