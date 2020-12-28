import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvAddComponent } from './cctv-add.component';

describe('CctvAddComponent', () => {
  let component: CctvAddComponent;
  let fixture: ComponentFixture<CctvAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CctvAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
