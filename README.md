# angular-leaflet

[![npm version](https://badge.fury.io/js/angular-leaflet.svg)](https://badge.fury.io/js/angular-leaflet)
[![Build Status](https://travis-ci.org/kklimczak/angular-leaflet.svg?branch=master)](https://travis-ci.org/kklimczak/angular-leaflet)


Collection of angular components to build map views faster and with minimal configuration using the most popular library **LeafletJS**.
## Instalation
```
npm install --save angular-leaflet
```
## Usage
Import `NglModule` to root or feature module in your angular app.
```typescript
@NgModule({ 
  imports: [NglModule]
})  
export class AppModule { }
```
Recommended way to import library is through submodules listed below.

|Name|Description|Components
|--|--|--|
| `NglCoreModule` | Library core module required by other modules. Contains the base component and class `BaseLayer` to create custom layer. | `<app-leaflet>` |
|`NglImageOverlayModule`| Contains component to display image as a base layer. Also required to set `crs` in map options to `CRS.Simple`.| `<app-image-overlay>`
|`NglTileLayerModule`|Contains component to display tiles as a base layer. At this moment, OpenStreetMap is a provider of tiles.| `<app-tile-layer>`
|`NglMarkerModule`|Contains component to display Marker layer on map.|`<app-marker`
|`NglVectorsModule`| Contains layers based on vectors such as Polyline, Polygon and Rectangle. Circle layer could be added in the future.|`<app-polyline>`, `<app-polygon`, `<app-rectangle>`
|`NglGroupsModule`|Under development|`<app-feature-group>`

## Examples
example-app - contains a example angular5 app with angular-leaflet library example usage.

## Issues
Feel free to create issue with your problem.
