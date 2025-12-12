import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reported } from './reported';

describe('Reported', () => {
  let component: Reported;
  let fixture: ComponentFixture<Reported>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reported]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reported);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
