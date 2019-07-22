# angular-leaflet

[![npm version](https://badge.fury.io/js/angular-leaflet.svg)](https://badge.fury.io/js/angular-leaflet)
[![Build Status](https://travis-ci.org/kklimczak/angular-leaflet.svg?branch=master)](https://travis-ci.org/kklimczak/angular-leaflet)

`angular-leaflet` is an angular component collection to build map views faster with the minimal configuration built at the top of the most popular library **LeafletJS**.

## Installation

Run command below in the terminal inside your root project directory:

```shell
npm install angular-leaflet --save
```

## Usage

First of all, you need to import `NglCoreModule` inside your root or feature module to get core elements required for rest modules.

To create leaflet container, put `<app-leaflet>` component inside your template.

```html
<app-leaflet [options]="options"></app-leaflet>
```

Also, you need to pass an options object to the leaflet component. It's a `MapOptions` interface included inside the `@types/leaflet` package. To bootstrap component correctly, you must set a [center](https://leafletjs.com/reference-1.5.0.html#map-center) and [initial zoom](https://leafletjs.com/reference-1.5.0.html#map-zoom).

```typescript
options: MapOptions = {
  center: [51.759445, 19.457216],
  zoom: 10
};
```

> Main container uses flexbox with height and width set on 100%. When you don't see the leaflet component, check your styles.

After that, in your application, the leaflet component should appear. To get more functionalities such as tiles or markers etc. should go to submodules docs.

## Example

```html
<app-leaflet [options]="options">
  <app-tile-layer></app-tile-layer>
  <app-feature-group>
    <app-polyline [coordinates]="coordinates | async" [options]="pathOptions | async"></app-polyline>
    <app-marker [latLng]="[51.759445, 19.457216]"></app-marker>
    <app-polygon
      [coordinates]="[[51.7894, 19.4972], [51.750, 19.435], [51.731, 19.471]]"
      [options]="pathOptions | async"
    ></app-polygon>
    <app-rectangle [bounds]="latLngBounds | async" [options]="pathOptions | async"></app-rectangle>
    <app-circle [center]="center | async" [radius]="1000" [options]="pathOptions | async"></app-circle>
  </app-feature-group>
</app-leaflet>
```

Additionally, repository contains an example library usage. To run type in your console:

```shell
npm run start
```

## Table with available submodules

| Name                    | Description                                                                                                     | Components                                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `NglImageOverlayModule` | Contains component to display image as a base layer. Also required to set `crs` in map options to `CRS.Simple`. | `<app-image-overlay>`                                               |
| `NglTileLayerModule`    | Contains component to display tiles as a base layer. At this moment, OpenStreetMap is a provider of tiles.      | `<app-tile-layer>`                                                  |
| `NglMarkerModule`       | Contains component to display Marker layer on map.                                                              | `<app-marker`                                                       |
| `NglVectorsModule`      | Contains layers based on vectors such as Polyline, Polygon, Circle and Rectangle.                               | `<app-polyline>`, `<app-polygon`, `<app-rectangle>`, `<app-circle>` |
| `NglGroupsModule`       | Contains group-like layers.                                                                                     | `<app-feature-group>`                                               |

## Issues

Feel free to create issue with your problem.
