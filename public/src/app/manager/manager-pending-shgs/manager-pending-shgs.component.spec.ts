import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPendingShgsComponent } from './manager-pending-shgs.component';

describe('ManagerPendingShgsComponent', () => {
  let component: ManagerPendingShgsComponent;
  let fixture: ComponentFixture<ManagerPendingShgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPendingShgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPendingShgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
