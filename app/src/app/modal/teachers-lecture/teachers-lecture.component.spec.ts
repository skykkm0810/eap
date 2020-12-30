import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersLectureComponent } from './teachers-lecture.component';

describe('TeachersLectureComponent', () => {
  let component: TeachersLectureComponent;
  let fixture: ComponentFixture<TeachersLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
