import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureComponent } from './agriculture.component';

describe('AgricultureComponent', () => {
  let component: AgricultureComponent;
  let fixture: ComponentFixture<AgricultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
