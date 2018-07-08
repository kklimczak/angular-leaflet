import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureGroupComponent} from './feature-group/feature-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FeatureGroupComponent
  ],
  exports: [
    FeatureGroupComponent
  ]
})
export class NglGroupsModule { }
