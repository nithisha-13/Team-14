import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-list-usercourse',
  templateUrl: './list-usercourse.component.html',
  styleUrls: ['./list-usercourse.component.css']
})
export class ListUsercourseComponent implements OnInit {

  courses: Course[];
  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getItems();
  }

}
