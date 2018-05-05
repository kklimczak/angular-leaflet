# angular-leaflet docs

angular-leaflet is a angular component collection to build map views faster with minimal configuration built at the top of the most popular library **LeafletJS**.

## Instalation

Run this in the terminal inside your root project directory:

```shell
npm install angular-leaflet --save
```

## Usage

First of all, you need to import `NglCoreModule` inside your root or feature module to get core elements required for rest modules.

To create container of leaflet, put `<app-leaflet>` component inside your template.

```html
<app-leaflet [options]="options"></app-leaflet>
```

Also, you need to pass options object to leaflet component. It's a `MapOptions` interface included inside `@types/leaflet` package. To bootstrap component correctly, you must set center and initial zoom.

```typescript
options: MapOptions = {
    center: [51.759445, 19.457216],
    zoom: 10
}
```

> Main container use flexbox with height and width set on 100%. When you don't see leaflet component, check your styles.

After that, in your application, leaflet component should appear. To get more functionalities such as tiles or markers etc. should go to submodules docs.

## Concept

### Layers

The core concept of angular leaflet establish a `BaseLayer` as a main class of each layer component. That means, each component which contains leaflet layer need to extend `BaseLayer` class to appear on map. The root and groups component have a `@ContentChildred` property which bootstrap new layers on init and when add new layers on fly, g.e. with `*ngIf` or `*ngFor` directives.


## Submodules

angular-leaflet package contains modules with additional functionalities to build more complex maps.

- [NglTileLayerModule][] - add tile layer component.
- [NglImageOverlayModule][] - add image overlay layer to get single image inside map instead of tiles.
- [NglMarkerModule][] - add markers to mark some important elements such as POIs.
- [NglGroupsModule][] - add layers to group elements such as markers or vector layers.
- [][][NglVectorsModule][] - add vectors layers to draw on map using SVG or Canvas.

## Examples

This repository also offer example app which contains in `example-app` directory. Only need to run app, it's clone repository, install dependencies through `npm install` and type in console `npm run start`.
