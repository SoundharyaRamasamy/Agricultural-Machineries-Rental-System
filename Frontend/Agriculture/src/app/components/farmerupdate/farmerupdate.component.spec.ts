import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerupdateComponent } from './farmerupdate.component';

describe('FarmerupdateComponent', () => {
  let component: FarmerupdateComponent;
  let fixture: ComponentFixture<FarmerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
