import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsercourseComponent } from './list-usercourse.component';

describe('ListUsercourseComponent', () => {
  let component: ListUsercourseComponent;
  let fixture: ComponentFixture<ListUsercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsercourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
