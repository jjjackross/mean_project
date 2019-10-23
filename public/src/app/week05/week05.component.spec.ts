import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week05Component } from './week05.component';

describe('Week05Component', () => {
  let component: Week05Component;
  let fixture: ComponentFixture<Week05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
