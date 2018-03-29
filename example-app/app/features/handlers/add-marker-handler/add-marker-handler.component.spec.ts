import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarkerHandlerComponent } from './add-marker-handler.component';

describe('AddMarkerHandlerComponent', () => {
  let component: AddMarkerHandlerComponent;
  let fixture: ComponentFixture<AddMarkerHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarkerHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarkerHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
