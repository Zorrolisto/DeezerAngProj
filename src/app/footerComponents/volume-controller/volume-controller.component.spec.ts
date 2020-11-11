import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeControllerComponent } from './volume-controller.component';

describe('VolumeControllerComponent', () => {
  let component: VolumeControllerComponent;
  let fixture: ComponentFixture<VolumeControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
