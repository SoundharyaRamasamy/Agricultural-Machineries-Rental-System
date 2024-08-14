import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryupdateComponent } from './machineryupdate.component';

describe('MachineryupdateComponent', () => {
  let component: MachineryupdateComponent;
  let fixture: ComponentFixture<MachineryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineryupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
