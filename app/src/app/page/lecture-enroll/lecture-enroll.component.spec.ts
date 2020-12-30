import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureEnrollComponent } from './lecture-enroll.component';

describe('LectureEnrollComponent', () => {
  let component: LectureEnrollComponent;
  let fixture: ComponentFixture<LectureEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
