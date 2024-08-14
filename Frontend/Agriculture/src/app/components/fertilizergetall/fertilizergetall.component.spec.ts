import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizergetallComponent } from './fertilizergetall.component';

describe('FertilizergetallComponent', () => {
  let component: FertilizergetallComponent;
  let fixture: ComponentFixture<FertilizergetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizergetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizergetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
