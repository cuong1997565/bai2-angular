import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe02Component } from './pipe02.component';

describe('Pipe02Component', () => {
  let component: Pipe02Component;
  let fixture: ComponentFixture<Pipe02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipe02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipe02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
