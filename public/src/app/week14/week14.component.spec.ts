import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week14Component } from './week14.component';

describe('Week14Component', () => {
  let component: Week14Component;
  let fixture: ComponentFixture<Week14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
