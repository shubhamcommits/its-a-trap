import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorLmsComponent } from './mentor-lms.component';

describe('MentorLmsComponent', () => {
  let component: MentorLmsComponent;
  let fixture: ComponentFixture<MentorLmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorLmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorLmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
