import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEnrollComponent } from './company-enroll.component';

describe('CompanyEnrollComponent', () => {
  let component: CompanyEnrollComponent;
  let fixture: ComponentFixture<CompanyEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
