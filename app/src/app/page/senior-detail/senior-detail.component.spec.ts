import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorDetailComponent } from './senior-detail.component';

describe('SeniorDetailComponent', () => {
  let component: SeniorDetailComponent;
  let fixture: ComponentFixture<SeniorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
