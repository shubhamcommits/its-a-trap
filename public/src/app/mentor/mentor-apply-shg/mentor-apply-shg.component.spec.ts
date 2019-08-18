import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorApplyShgComponent } from './mentor-apply-shg.component';

describe('MentorApplyShgComponent', () => {
  let component: MentorApplyShgComponent;
  let fixture: ComponentFixture<MentorApplyShgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorApplyShgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorApplyShgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
