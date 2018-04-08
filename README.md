# angular-leaflet

Collection of angular components to build map views faster and with minimal configuration using the most popular library **LeafletJS**.

[![npm version](https://badge.fury.io/js/angular-leaflet.svg)](https://badge.fury.io/js/angular-leaflet)
[![Build Status](https://travis-ci.org/kklimczak/angular-leaflet.svg?branch=master)](https://travis-ci.org/kklimczak/angular-leaflet)

## Instalation
```
npm install --save angular-leaflet
```
## Usage
Import `NglCoreModule` to root or feature module in your angular app.
```typescript
@NgModule({ 
  imports: [NglCoreModule]
})  
export class AppModule { }
```

`NglCoreModule` contains base component `<app-leaflet>` and classes:
- `BaseLayer` - required to create custom layer and use inside core component
- `MapHandler` - required to create map handler class
- `LayerHandler` - required to create layer handler class

```typescript
<app-leaflet [options]="options">
  <app-tile-layer></app-tile-layer>
  <app-feature-group>
    <app-polyline [coordinates]="coordinates | async" [options]="pathOptions | async"></app-polyline>
    <app-marker [latLng]="[51.759445, 19.457216]"></app-marker>
    <app-polygon [coordinates]="[[51.7894, 19.4972], [51.750, 19.435], [51.731, 19.471]]"
                 [options]="pathOptions | async"></app-polygon>
    <app-rectangle [bounds]="latLngBounds | async" [options]="pathOptions | async"></app-rectangle>
    <app-circle [center]="center | async" [radius]="1000" [options]="pathOptions | async"></app-circle>
  </app-feature-group>
</app-leaflet>
```

## Table with available submodules

|Name|Description|Components
|--|--|--|
|`NglImageOverlayModule`| Contains component to display image as a base layer. Also required to set `crs` in map options to `CRS.Simple`.| `<app-image-overlay>`
|`NglTileLayerModule`|Contains component to display tiles as a base layer. At this moment, OpenStreetMap is a provider of tiles.| `<app-tile-layer>`
|`NglMarkerModule`|Contains component to display Marker layer on map.|`<app-marker`
|`NglVectorsModule`| Contains layers based on vectors such as Polyline, Polygon, Circle and Rectangle.|`<app-polyline>`, `<app-polygon`, `<app-rectangle>`, `<app-circle>`
|`NglGroupsModule`|Contains group-like layers.|`<app-feature-group>`

## Examples
example-app - contains a angular5 app with angular-leaflet library example usage.

## Issues
Feel free to create issue with your problem.
