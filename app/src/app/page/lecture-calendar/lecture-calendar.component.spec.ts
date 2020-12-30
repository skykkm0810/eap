import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureCalendarComponent } from './lecture-calendar.component';

describe('LectureCalendarComponent', () => {
  let component: LectureCalendarComponent;
  let fixture: ComponentFixture<LectureCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
