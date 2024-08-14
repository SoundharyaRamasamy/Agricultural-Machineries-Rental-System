import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmergetbyidComponent } from './farmergetbyid.component';

describe('FarmergetbyidComponent', () => {
  let component: FarmergetbyidComponent;
  let fixture: ComponentFixture<FarmergetbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmergetbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmergetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
