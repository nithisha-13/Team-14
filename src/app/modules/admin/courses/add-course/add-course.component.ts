import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addcourseForm = new FormGroup({
    courseName : new FormControl (''),
    courseDuration : new FormControl (''),
    courseTiming : new FormControl (''),
    noStudent : new FormControl (''),
    discription : new FormControl (''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
