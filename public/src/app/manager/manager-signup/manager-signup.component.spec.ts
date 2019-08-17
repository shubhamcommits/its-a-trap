import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSignupComponent } from './manager-signup.component';

describe('ManagerSignupComponent', () => {
  let component: ManagerSignupComponent;
  let fixture: ComponentFixture<ManagerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
