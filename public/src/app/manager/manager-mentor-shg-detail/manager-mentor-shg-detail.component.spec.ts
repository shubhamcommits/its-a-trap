import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMentorShgDetailComponent } from './manager-mentor-shg-detail.component';

describe('ManagerMentorShgDetailComponent', () => {
  let component: ManagerMentorShgDetailComponent;
  let fixture: ComponentFixture<ManagerMentorShgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMentorShgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMentorShgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
