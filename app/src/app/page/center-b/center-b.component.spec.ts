import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterBComponent } from './center-b.component';

describe('CenterBComponent', () => {
  let component: CenterBComponent;
  let fixture: ComponentFixture<CenterBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
