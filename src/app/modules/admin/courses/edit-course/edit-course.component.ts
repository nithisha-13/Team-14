import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { EditCoursePayLoad } from './edit-course.payload';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  formData:any={};
  editcourseForm:FormGroup;
  editcoursepayload:EditCoursePayLoad;
  constructor(private formbuilder:FormBuilder) { 
    this.editcoursepayload={
      courseName:'',
      courseDuration:'',
      courseTiming:'',
      noStudent:'',
      description:'',
    }
  }
  
  ngOnInit(): void {
    this.editcourseForm = new FormGroup({
      courseName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
      courseDuration: new FormControl('', [Validators.required]),
      courseTiming: new FormControl('', [Validators.required]),
      noStudent:new FormControl('', [Validators.required,Validators.min(1),Validators.max(100),Validators.pattern("[0-9]{1,3}")]),
      description: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")]),
    });
  }
  editCourse(){
    console.log(this.formData);
  }
}
