import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHook2Component } from './lifecycle-hook2.component';

describe('LifecycleHook2Component', () => {
  let component: LifecycleHook2Component;
  let fixture: ComponentFixture<LifecycleHook2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHook2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
