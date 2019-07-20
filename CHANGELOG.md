## [0.0.17](https://github.com/kklimczak/angular-leaflet/compare/0.0.15...0.0.17) (2019-07-20)

### Bug Fixes

- **example-app:** update lib selectors ([e99b8f3](https://github.com/kklimczak/angular-leaflet/commit/e99b8f3))

### Features

- **image-overlay:** remove fitbounds from prepareBounds method ([#27](https://github.com/kklimczak/angular-leaflet/issues/27)) ([3d2e240](https://github.com/kklimczak/angular-leaflet/commit/3d2e240))
- add \*Ref suffix ([#37](https://github.com/kklimczak/angular-leaflet/issues/37)) ([aee6ce8](https://github.com/kklimczak/angular-leaflet/commit/aee6ce8))

### BREAKING CHANGES

- Each handler has a new entry called `mapRef` and each layer handler `layerRef`

## [0.0.15](https://github.com/kklimczak/angular-leaflet/compare/0.0.14...0.0.15) (2018-08-26)

### Features

- **core:** add id to base layer using uuid generator ([451e040](https://github.com/kklimczak/angular-leaflet/commit/451e040))
- **core:** add new layer id to layerIds array and prevent to recreate layer when exist ([c96fc51](https://github.com/kklimczak/angular-leaflet/commit/c96fc51))
- **example-app:** prepare app to check recreating layers ([d0cc6d4](https://github.com/kklimczak/angular-leaflet/commit/d0cc6d4))
- **groups:** add new layer id to layerIds array and prevent to recreate layer when exist ([a0bc6f2](https://github.com/kklimczak/angular-leaflet/commit/a0bc6f2))

## [0.0.14](https://github.com/kklimczak/angular-leaflet/compare/0.0.13...0.0.14) (2018-07-09)

### Bug Fixes

- **image-overlay:** update layer properties when layer exist ([3b098b8](https://github.com/kklimczak/angular-leaflet/commit/3b098b8))
- **ng-packagr:** add whitelisted elements to config ([ef37482](https://github.com/kklimczak/angular-leaflet/commit/ef37482))

### Code Refactoring

- **handlers:** rename map property to leafletMap ([5d8c41f](https://github.com/kklimczak/angular-leaflet/commit/5d8c41f)), closes [#17](https://github.com/kklimczak/angular-leaflet/issues/17)

### Features

- **example-app:** add example of changing url ([6279536](https://github.com/kklimczak/angular-leaflet/commit/6279536))
- **lib:** add lib directory ([703e6fe](https://github.com/kklimczak/angular-leaflet/commit/703e6fe))

### BREAKING CHANGES

- **handlers:** change map property name

## [0.0.11](https://github.com/kklimczak/angular-leaflet/compare/0.0.10...0.0.11) (2018-04-08)

### Bug Fixes

- **core:** Add flex param to leaflet container ([c20e78a](https://github.com/kklimczak/angular-leaflet/commit/c20e78a))
- **vectors/rectangle:** Check is map exist before layer initialization ([a41c574](https://github.com/kklimczak/angular-leaflet/commit/a41c574)), closes [#15](https://github.com/kklimczak/angular-leaflet/issues/15)

## [0.0.2](https://github.com/kklimczak/angular-leaflet/compare/0.0.1...v0.0.2) (2018-03-15)
