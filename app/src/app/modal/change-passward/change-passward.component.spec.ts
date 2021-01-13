import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswardComponent } from './change-passward.component';

describe('ChangePasswardComponent', () => {
  let component: ChangePasswardComponent;
  let fixture: ComponentFixture<ChangePasswardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
