import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './components/leaflet/leaflet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeafletComponent],
  exports: [LeafletComponent]
})
export class LibModule { }
