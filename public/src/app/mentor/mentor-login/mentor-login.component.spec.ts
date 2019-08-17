import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorLoginComponent } from './mentor-login.component';

describe('MentorLoginComponent', () => {
  let component: MentorLoginComponent;
  let fixture: ComponentFixture<MentorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
