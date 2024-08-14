import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuservicesComponent } from './ouservices.component';

describe('OuservicesComponent', () => {
  let component: OuservicesComponent;
  let fixture: ComponentFixture<OuservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
