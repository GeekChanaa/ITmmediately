/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Services2Component } from './Services2.component';

describe('Services2Component', () => {
  let component: Services2Component;
  let fixture: ComponentFixture<Services2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Services2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Services2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
