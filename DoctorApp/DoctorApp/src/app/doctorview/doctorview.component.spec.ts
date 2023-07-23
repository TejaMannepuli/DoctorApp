import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorviewComponent } from './doctorview.component';

describe('DoctorviewComponent', () => {
  let component: DoctorviewComponent;
  let fixture: ComponentFixture<DoctorviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorviewComponent]
    });
    fixture = TestBed.createComponent(DoctorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
