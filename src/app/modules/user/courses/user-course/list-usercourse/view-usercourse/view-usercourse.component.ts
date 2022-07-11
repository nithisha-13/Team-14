import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-view-usercourse',
  templateUrl: './view-usercourse.component.html',
  styleUrls: ['./view-usercourse.component.css']
})
export class ViewUsercourseComponent implements OnInit {

  @Input() course:Course;
  constructor(private courseService: CourseService) { 
  }

  ngOnInit(): void {
  }

  onSelectItem() {
    this.courseService.courseSelectedEvent.emit(this.course);
  }

}
