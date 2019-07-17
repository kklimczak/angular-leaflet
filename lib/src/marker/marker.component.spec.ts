import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerComponent } from './marker.component';
import { divIcon, Map, marker } from 'leaflet';

describe('MarkerComponent', () => {
  let component: MarkerComponent;
  let fixture: ComponentFixture<MarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create layerRef', () => {
    const map = new Map(document.createElement('div'));
    map.addLayer = jest.fn();
    component.initHandlers = jest.fn();

    component.latLng = [0, 0];

    fixture.detectChanges();

    component.addTo(map);

    expect(map.addLayer).toHaveBeenCalledWith(
      marker([0, 0], {
        icon: divIcon()
      })
    );
    expect(component.initHandlers).toHaveBeenCalled();
  });

  test('should change latLng when input has been changed', () => {
    const map = new Map(document.createElement('div'));
    component.latLng = [0, 0];
    fixture.detectChanges();

    component.addTo(map);

    component.layerRef.setLatLng = jest.fn();

    component.latLng = [20, 20];

    fixture.detectChanges();

    expect(component.layerRef.setLatLng).toHaveBeenCalledWith([20, 20]);
  });
});
