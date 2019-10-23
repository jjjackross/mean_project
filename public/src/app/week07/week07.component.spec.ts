import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week07Component } from './week07.component';

describe('Week07Component', () => {
  let component: Week07Component;
  let fixture: ComponentFixture<Week07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
