import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorMyShgComponent } from './mentor-my-shg.component';

describe('MentorMyShgComponent', () => {
  let component: MentorMyShgComponent;
  let fixture: ComponentFixture<MentorMyShgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorMyShgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorMyShgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
