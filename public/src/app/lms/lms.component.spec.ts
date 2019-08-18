import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsComponent } from './lms.component';

describe('LmsComponent', () => {
  let component: LmsComponent;
  let fixture: ComponentFixture<LmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
