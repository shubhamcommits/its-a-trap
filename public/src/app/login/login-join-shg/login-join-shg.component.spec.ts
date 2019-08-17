import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJoinShgComponent } from './login-join-shg.component';

describe('LoginJoinShgComponent', () => {
  let component: LoginJoinShgComponent;
  let fixture: ComponentFixture<LoginJoinShgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginJoinShgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJoinShgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
