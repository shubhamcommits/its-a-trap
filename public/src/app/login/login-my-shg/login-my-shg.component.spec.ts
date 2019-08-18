import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMyShgComponent } from './login-my-shg.component';

describe('LoginMyShgComponent', () => {
  let component: LoginMyShgComponent;
  let fixture: ComponentFixture<LoginMyShgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMyShgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMyShgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
