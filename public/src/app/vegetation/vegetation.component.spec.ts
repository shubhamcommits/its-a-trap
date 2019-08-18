import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetationComponent } from './vegetation.component';

describe('VegetationComponent', () => {
  let component: VegetationComponent;
  let fixture: ComponentFixture<VegetationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
