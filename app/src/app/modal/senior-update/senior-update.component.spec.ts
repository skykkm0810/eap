import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorUpdateComponent } from './senior-update.component';

describe('SeniorUpdateComponent', () => {
  let component: SeniorUpdateComponent;
  let fixture: ComponentFixture<SeniorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
