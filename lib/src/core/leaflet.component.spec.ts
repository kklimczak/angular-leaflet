import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletComponent } from './leaflet.component';

describe('LeafletComponent', () => {
  let component: LeafletComponent;
  let fixture: ComponentFixture<LeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeafletComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('should create mapRef object with passed options', () => {
    component.options = {
      center: [0, 0],
      zoom: 10
    };
    fixture.detectChanges();
    const {
      map: {
        options: { center, zoom }
      }
    } = component;
    expect(component.map).toBeTruthy();
    expect(center).toEqual([0, 0]);
    expect(zoom).toEqual(10);
  });
});
