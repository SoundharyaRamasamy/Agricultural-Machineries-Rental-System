import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerpostComponent } from './farmerpost.component';

describe('FarmerpostComponent', () => {
  let component: FarmerpostComponent;
  let fixture: ComponentFixture<FarmerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
