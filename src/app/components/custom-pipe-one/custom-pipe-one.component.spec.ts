import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeOneComponent } from './custom-pipe-one.component';

describe('CustomPipeOneComponent', () => {
  let component: CustomPipeOneComponent;
  let fixture: ComponentFixture<CustomPipeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
