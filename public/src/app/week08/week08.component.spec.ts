import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week08Component } from './week08.component';

describe('Week08Component', () => {
  let component: Week08Component;
  let fixture: ComponentFixture<Week08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
