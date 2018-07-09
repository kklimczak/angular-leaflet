import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageOverlayComponent} from './image-overlay.component';
import {CRS, latLngBounds, Map} from 'leaflet';

const url = 'http://localhost:4200/test.jpg';
const width = 200;
const height = 300;

describe('ImageOverlayComponent', () => {
  let component: ImageOverlayComponent;
  let fixture: ComponentFixture<ImageOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageOverlayComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should prepare image layer', () => {
    component.map = new Map(document.createElement('div'));
    component.map.addLayer = jest.fn();
    component.src = url;
    component.height = height;
    component.width = width;

    fixture.detectChanges();

    expect(component.layer).toBeTruthy();
    expect(component.map.addLayer).toHaveBeenCalled();
    expect(component.map.addLayer).toHaveBeenCalledWith(component.layer);
  });

  test('should prevent to prepare layer when map is missing', () => {
    component.src = url;
    component.height = height;
    component.width = width;

    fixture.detectChanges();

    expect(component.layer).toBeFalsy();
  });

  test('should change width when input has been changed', () => {
    setBaseComponentSetup(component);
    fixture.detectChanges();

    component.layer.setBounds = jest.fn();

    component.width = 300;

    fixture.detectChanges();

    expect(component.layer.setBounds).toHaveBeenCalled();
    expect(component.layer.setBounds).toHaveBeenCalledWith(latLngBounds([[-0, 300], [-300, 0]]));
  });

  test('should change height when input has been changed', () => {
    setBaseComponentSetup(component);
    fixture.detectChanges();

    component.layer.setBounds = jest.fn();

    component.height = 200;
    fixture.detectChanges();

    expect(component.layer.setBounds).toHaveBeenCalled();
    expect(component.layer.setBounds).toHaveBeenCalledWith(latLngBounds([[-0, 200], [-200, 0]]));
  });

  test('should change url when input has been changed', () => {
    const src = 'http://localhost/test.png';

    setBaseComponentSetup(component);
    fixture.detectChanges();

    component.layer.setUrl = jest.fn();
    component.src = src;

    fixture.detectChanges();

    expect(component.layer.setUrl).toHaveBeenCalled();
    expect(component.layer.setUrl).toHaveBeenCalledWith(src);
  });
});

function setBaseComponentSetup(component: ImageOverlayComponent) {
  component.map = new Map(document.createElement('div'), {
    crs: CRS.Simple
  });
  component.src = url;
  component.height = height;
  component.width = width;
}
