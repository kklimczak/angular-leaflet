import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureGroupComponent} from './components/feature-group/feature-group.component';
import {MarkerComponent} from './components/marker/marker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureGroupComponent,
    MarkerComponent],
  exports: [FeatureGroupComponent,
    MarkerComponent]
})
export class LeafletModule { }
