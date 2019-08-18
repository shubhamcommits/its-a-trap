import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFundShgComponent } from './login-fund-shg.component';

describe('LoginFundShgComponent', () => {
  let component: LoginFundShgComponent;
  let fixture: ComponentFixture<LoginFundShgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFundShgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFundShgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
