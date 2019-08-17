import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPendingMentorsComponent } from './manager-pending-mentors.component';

describe('ManagerPendingMentorsComponent', () => {
  let component: ManagerPendingMentorsComponent;
  let fixture: ComponentFixture<ManagerPendingMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPendingMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPendingMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
