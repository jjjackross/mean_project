import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week09Component } from './week09.component';

describe('Week09Component', () => {
  let component: Week09Component;
  let fixture: ComponentFixture<Week09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
