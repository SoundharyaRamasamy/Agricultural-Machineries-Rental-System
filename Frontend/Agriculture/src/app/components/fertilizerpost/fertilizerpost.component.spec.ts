import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerpostComponent } from './fertilizerpost.component';

describe('FertilizerpostComponent', () => {
  let component: FertilizerpostComponent;
  let fixture: ComponentFixture<FertilizerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
