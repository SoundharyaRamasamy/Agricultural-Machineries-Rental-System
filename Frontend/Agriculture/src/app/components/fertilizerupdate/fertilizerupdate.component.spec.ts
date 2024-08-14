import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerupdateComponent } from './fertilizerupdate.component';

describe('FertilizerupdateComponent', () => {
  let component: FertilizerupdateComponent;
  let fixture: ComponentFixture<FertilizerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
