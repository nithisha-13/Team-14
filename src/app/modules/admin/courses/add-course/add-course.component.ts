import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddCoursePayLoad } from './add-course.payload';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  formData:any={};
  addcourseForm:FormGroup;
  addcoursepayload:AddCoursePayLoad;
  // addcourseForm = new FormGroup({
  //   courseName : new FormControl (''),
  //   courseDuration : new FormControl (''),
  //   courseTiming : new FormControl (''),
  //   noStudent : new FormControl (''),
  //   discription : new FormControl (''),
  // });
  constructor(private formbuilder:FormBuilder) { 
    this.addcoursepayload={
      courseName:'',
      courseDuration:'',
      courseTiming:'',
      noStudent:'',
      description:'',
    }
  }

  ngOnInit(): void {
    this.addcourseForm = new FormGroup({
      courseName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')]),
      courseDuration: new FormControl('', [Validators.required]),
      courseTiming: new FormControl('', [Validators.required]),
      noStudent:new FormControl('', [Validators.required,Validators.min(1),Validators.max(100),Validators.pattern("[0-9]{1,3}")]),
      description: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")]),
    });
  }
  addCourse(){
    console.log(this.formData);
  }
}
