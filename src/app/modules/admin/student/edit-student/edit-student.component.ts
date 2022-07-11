import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EditStudentPayLoad } from './edit-student.payload';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editstudentForm:FormGroup;
  editstudentpayload:EditStudentPayLoad;
  formData:any={};
  constructor(private formbuilder:FormBuilder) { 
    this.editstudentpayload={
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
    this.editstudentForm = new FormGroup({
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
    this.editstudentpayload.firstName= this.editstudentForm.get('firstName').value;
    this.editstudentpayload.fatherName = this.editstudentForm.get('fatherName').value;
    this.editstudentpayload.motherName = this.editstudentForm.get('motherName').value;
    this.editstudentpayload.email = this.editstudentForm.get('email').value;
    this.editstudentpayload.age = this.editstudentForm.get('age').value;
    this.editstudentpayload.lastName = this.editstudentForm.get('lastName').value;
    this.editstudentpayload.phoneNumber = this.editstudentForm.get('phoneNumber').value;
    this.editstudentpayload.alternateNumber = this.editstudentForm.get('alternateNumber').value;
    this.editstudentpayload.maleOrFemale = this.editstudentForm.get('maleOrFemale').value;
    this.editstudentpayload.address = this.editstudentForm.get('address').value;
    this.editstudentpayload.city = this.editstudentForm.get('city').value;
    this.editstudentpayload.pincode = this.editstudentForm.get('pincode').value;
    this.editstudentpayload.state = this.editstudentForm.get('state').value;
    this.editstudentpayload.nationality = this.editstudentForm.get('nationality').value;
  }
  editStudent(){
    console.log(this.formData);
  }


}
