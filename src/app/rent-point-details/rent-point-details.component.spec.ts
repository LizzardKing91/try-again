import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPointDetailsComponent } from './rent-point-details.component';

describe('RentPointDetailsComponent', () => {
  let component: RentPointDetailsComponent;
  let fixture: ComponentFixture<RentPointDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPointDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPointDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
