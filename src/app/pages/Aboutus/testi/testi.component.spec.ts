/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestiComponent } from './testi.component';

describe('TestiComponent', () => {
  let component: TestiComponent;
  let fixture: ComponentFixture<TestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});