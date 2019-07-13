import { BaseLayer } from './base-layer';
import { map, marker } from 'leaflet';

describe('BaseLayer', () => {
  let baseLayer: BaseLayer;

  beforeEach(() => {
    baseLayer = new BaseLayer();
  });

  test('should be defined', () => {
    expect(baseLayer).toBeDefined();
    expect(baseLayer.id).toBeDefined();
  });

  test('should add layer', () => {
    const mapMock = map(document.createElement('div'), { center: [0, 0], zoom: 0 });

    baseLayer.addTo(mapMock);

    expect(baseLayer.map).toEqual(mapMock);
  });

  test('should remove layer', () => {
    const mapMock = map(document.createElement('div'), { center: [0, 0], zoom: 0 });
    mapMock.removeLayer = jest.fn();
    baseLayer.map = mapMock;
    baseLayer.layer = marker([2, 2]);

    baseLayer.removeFrom();

    expect(mapMock.removeLayer).toHaveBeenCalled();
  });
});
