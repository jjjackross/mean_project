import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week13Component } from './week13.component';

describe('Week13Component', () => {
  let component: Week13Component;
  let fixture: ComponentFixture<Week13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
