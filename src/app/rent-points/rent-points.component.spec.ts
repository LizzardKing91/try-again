import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPointsComponent } from './rent-points.component';

describe('RentPointsComponent', () => {
  let component: RentPointsComponent;
  let fixture: ComponentFixture<RentPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
