import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZones } from './add-zones';

describe('AddZones', () => {
  let component: AddZones;
  let fixture: ComponentFixture<AddZones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddZones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddZones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
