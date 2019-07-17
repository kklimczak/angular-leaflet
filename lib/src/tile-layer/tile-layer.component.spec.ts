import 'jest';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLayerComponent } from './tile-layer.component';
import { Map, TileLayer } from 'leaflet';

describe('TileLayerComponent', () => {
  let component: TileLayerComponent;
  let fixture: ComponentFixture<TileLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TileLayerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should prepare layerRef', () => {
    const map = new Map(document.createElement('div'));
    map.addLayer = jest.fn();
    component.initHandlers = jest.fn();

    component.addTo(map);

    expect(map.addLayer).toHaveBeenCalledWith(expect.any(TileLayer));
    expect(component.initHandlers).toHaveBeenCalled();
  });
});
