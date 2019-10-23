import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week11Component } from './week11.component';

describe('Week11Component', () => {
  let component: Week11Component;
  let fixture: ComponentFixture<Week11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
