import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsercourseComponent } from './view-usercourse.component';

describe('ViewUsercourseComponent', () => {
  let component: ViewUsercourseComponent;
  let fixture: ComponentFixture<ViewUsercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsercourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
