import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmergetallComponent } from './farmergetall.component';

describe('FarmergetallComponent', () => {
  let component: FarmergetallComponent;
  let fixture: ComponentFixture<FarmergetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmergetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmergetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
