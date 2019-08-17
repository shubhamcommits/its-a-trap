import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFundComponent } from './login-fund.component';

describe('LoginFundComponent', () => {
  let component: LoginFundComponent;
  let fixture: ComponentFixture<LoginFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
