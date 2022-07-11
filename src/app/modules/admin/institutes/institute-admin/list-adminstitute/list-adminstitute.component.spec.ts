import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminstituteComponent } from './list-adminstitute.component';

describe('ListAdminstituteComponent', () => {
  let component: ListAdminstituteComponent;
  let fixture: ComponentFixture<ListAdminstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdminstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
