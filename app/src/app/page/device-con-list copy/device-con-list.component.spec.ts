import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConListComponent } from './device-con-list.component';

describe('DeviceConListComponent', () => {
  let component: DeviceConListComponent;
  let fixture: ComponentFixture<DeviceConListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceConListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceConListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
