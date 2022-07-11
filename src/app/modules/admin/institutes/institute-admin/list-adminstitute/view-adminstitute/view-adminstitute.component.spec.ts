import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminstituteComponent } from './view-adminstitute.component';

describe('ViewAdminstituteComponent', () => {
  let component: ViewAdminstituteComponent;
  let fixture: ComponentFixture<ViewAdminstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
