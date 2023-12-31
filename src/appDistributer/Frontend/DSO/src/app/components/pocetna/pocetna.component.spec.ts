/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PocetnaComponent } from './pocetna.component';

describe('PocetnaComponent', () => {
  let component: PocetnaComponent;
  let fixture: ComponentFixture<PocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
