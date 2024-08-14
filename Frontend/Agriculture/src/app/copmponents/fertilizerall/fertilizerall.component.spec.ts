import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerallComponent } from './fertilizerall.component';

describe('FertilizerallComponent', () => {
  let component: FertilizerallComponent;
  let fixture: ComponentFixture<FertilizerallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
