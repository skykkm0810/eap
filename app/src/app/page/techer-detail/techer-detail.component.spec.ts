import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecherDetailComponent } from './techer-detail.component';

describe('TecherDetailComponent', () => {
  let component: TecherDetailComponent;
  let fixture: ComponentFixture<TecherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecherDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
