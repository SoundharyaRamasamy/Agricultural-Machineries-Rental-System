import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinerypostComponent } from './machinerypost.component';

describe('MachinerypostComponent', () => {
  let component: MachinerypostComponent;
  let fixture: ComponentFixture<MachinerypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinerypostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinerypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
