import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LibModule} from './lib/lib.module';
import {MatButtonModule, MatGridListModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';
import {TilesComponent} from './features/tiles/tiles.component';
import {TilesModule} from './features/tiles/tiles.module';
import {ImageModule} from './features/image/image.module';
import {ImageComponent} from './features/image/image.component';
import {PolygonsModule} from './features/polygons/polygons.module';
import {PolygonsComponent} from './features/polygons/polygons.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tiles'
  },
  {
    path: 'tiles',
    component: TilesComponent
  },
  {
    path: 'image-overlay',
    component: ImageComponent
  },
  {
    path: 'polygons',
    component: PolygonsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    TilesModule,
    ImageModule,
    PolygonsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
