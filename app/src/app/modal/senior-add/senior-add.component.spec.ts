import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorAddComponent } from './senior-add.component';

describe('SeniorAddComponent', () => {
  let component: SeniorAddComponent;
  let fixture: ComponentFixture<SeniorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
