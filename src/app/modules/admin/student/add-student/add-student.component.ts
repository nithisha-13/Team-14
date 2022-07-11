import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddStudentPayLoad } from './add-student.payload';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addstudentForm:FormGroup;
  addstudentpayload:AddStudentPayLoad;
  formData:any={};
  constructor(private formbuilder:FormBuilder) { 
    this.addstudentpayload={
      firstName:'',
        lastName:'',
        maleOrFemale:'',
        fatherName:'',
        phoneNumber:'',
        alternateNumber:'',
        motherName:'',
        email:'',
        age:'',
        address:'',
        city:'',
        pincode:'',
        state:'',
        nationality:'',
    }
  }

  ngOnInit(): void {
    this.addstudentForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{3,40}$')]),
      fatherName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{3,40}$')]),
      motherName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{3,40}$')]),
      email:new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$')]),
      age: new FormControl('', [Validators.required,Validators.min(10),Validators.max(70),Validators.pattern("[0-9]{2}")]),
      lastName: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{1,40}$')]),
      phoneNumber: new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
      alternateNumber: new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
      maleOrFemale: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{1,6}$')]),
      address: new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){0,40}$')]),
      city: new FormControl('', [Validators.required,Validators.pattern('^([A-Z+a-z+0-9_-]+.*?){0,40}$')]),
      pincode: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{0,6}$')]),
      state: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z ]{0,40}$')]),
      nationality: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z]{2,40}$')])
  
    });
  }
  onSubmit(e)
  {
    this.addstudentpayload.firstName= this.addstudentForm.get('firstName').value;
    this.addstudentpayload.fatherName = this.addstudentForm.get('fatherName').value;
    this.addstudentpayload.motherName = this.addstudentForm.get('motherName').value;
    this.addstudentpayload.email = this.addstudentForm.get('email').value;
    this.addstudentpayload.age = this.addstudentForm.get('age').value;
    this.addstudentpayload.lastName = this.addstudentForm.get('lastName').value;
    this.addstudentpayload.phoneNumber = this.addstudentForm.get('phoneNumber').value;
    this.addstudentpayload.alternateNumber = this.addstudentForm.get('alternateNumber').value;
    this.addstudentpayload.maleOrFemale = this.addstudentForm.get('maleOrFemale').value;
    this.addstudentpayload.address = this.addstudentForm.get('address').value;
    this.addstudentpayload.city = this.addstudentForm.get('city').value;
    this.addstudentpayload.pincode = this.addstudentForm.get('pincode').value;
    this.addstudentpayload.state = this.addstudentForm.get('state').value;
    this.addstudentpayload.nationality = this.addstudentForm.get('nationality').value;
  }
  addStudent(){
    console.log(this.formData);
  }

}
