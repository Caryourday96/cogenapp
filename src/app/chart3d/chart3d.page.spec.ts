import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart3dPage } from './chart3d.page';

describe('Chart3dPage', () => {
  let component: Chart3dPage;
  let fixture: ComponentFixture<Chart3dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart3dPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
