import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week12Component } from './week12.component';

describe('Week12Component', () => {
  let component: Week12Component;
  let fixture: ComponentFixture<Week12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
