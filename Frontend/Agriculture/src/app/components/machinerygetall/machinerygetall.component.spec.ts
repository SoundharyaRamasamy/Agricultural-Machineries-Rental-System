import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinerygetallComponent } from './machinerygetall.component';

describe('MachinerygetallComponent', () => {
  let component: MachinerygetallComponent;
  let fixture: ComponentFixture<MachinerygetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinerygetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinerygetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
