import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorConListComponent } from './senior-con-list.component';

describe('SeniorConListComponent', () => {
  let component: SeniorConListComponent;
  let fixture: ComponentFixture<SeniorConListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorConListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorConListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
