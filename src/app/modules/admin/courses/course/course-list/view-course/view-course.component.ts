import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  @Input() course:Course;
  constructor(private courseService: CourseService) { 

    
  }

  ngOnInit(): void {
  }

  onSelectItem() {
    this.courseService.courseSelectedEvent.emit(this.course);
  }


}
