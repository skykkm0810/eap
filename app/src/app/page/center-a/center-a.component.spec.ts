import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAComponent } from './center-a.component';

describe('CenterAComponent', () => {
  let component: CenterAComponent;
  let fixture: ComponentFixture<CenterAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
