import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  editcourseForm = this.formBuilder.group({
    courseName : '',
    courseDuration : '',
    courseTiming : '',
    noStudent : '',
    discription : '',
  });
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
