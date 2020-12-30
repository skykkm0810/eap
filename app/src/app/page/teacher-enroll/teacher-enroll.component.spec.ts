import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEnrollComponent } from './teacher-enroll.component';

describe('TeacherEnrollComponent', () => {
  let component: TeacherEnrollComponent;
  let fixture: ComponentFixture<TeacherEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
