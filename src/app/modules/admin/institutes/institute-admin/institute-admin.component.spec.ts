import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminComponent } from './institute-admin.component';

describe('InstituteAdminComponent', () => {
  let component: InstituteAdminComponent;
  let fixture: ComponentFixture<InstituteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
