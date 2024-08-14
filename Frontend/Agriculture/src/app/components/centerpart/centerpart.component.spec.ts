import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterpartComponent } from './centerpart.component';

describe('CenterpartComponent', () => {
  let component: CenterpartComponent;
  let fixture: ComponentFixture<CenterpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
