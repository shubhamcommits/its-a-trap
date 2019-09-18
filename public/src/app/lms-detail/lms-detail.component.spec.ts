import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsDetailComponent } from './lms-detail.component';

describe('LmsDetailComponent', () => {
  let component: LmsDetailComponent;
  let fixture: ComponentFixture<LmsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
