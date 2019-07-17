import { BaseLayer } from './base-layer';
import { map, marker } from 'leaflet';

describe('BaseLayer', () => {
  let baseLayer: BaseLayer<any>;

  beforeEach(() => {
    baseLayer = new BaseLayer();
  });

  test('should be defined', () => {
    expect(baseLayer).toBeDefined();
    expect(baseLayer.id).toBeDefined();
  });

  test('should add layerRef', () => {
    const mapMock = map(document.createElement('div'), { center: [0, 0], zoom: 0 });

    baseLayer.addTo(mapMock);

    expect(baseLayer.mapRef).toEqual(mapMock);
  });

  test('should remove layerRef', () => {
    const mapMock = map(document.createElement('div'), { center: [0, 0], zoom: 0 });
    mapMock.removeLayer = jest.fn();
    baseLayer.mapRef = mapMock;
    baseLayer.layerRef = marker([2, 2]);

    baseLayer.removeFrom();

    expect(mapMock.removeLayer).toHaveBeenCalled();
  });
});
