import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARComponent } from './ar.component';

describe('ARComponent', () => {
  let component: ARComponent;
  let fixture: ComponentFixture<ARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
