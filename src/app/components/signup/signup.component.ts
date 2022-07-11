import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupPayload } from './signup.payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  Roles = [
    { id: 1, value: 'Admin' },
    { id: 2, value: 'User' },
  ];
  registerForm:FormGroup;
  signuppayload:SignupPayload;
  formData:any={};
  // registerForm = this.formBuilder.group({
  //   role: [''],
  //   name: '',
  //   email: '',
  //   phone: '',
  //   password: '',
  // });

  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.signuppayload={
      name:'',
      email:'',
      phone:'',
      password:'',
    } 
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username : new FormControl('', [Validators.required,Validators.minLength(6),Validators.pattern('^[a-z0-9_-]{8,15}$')]),
      email : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      phone : new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      password : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(16),Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$')]),
    });
  }

  signUp(){
    console.log(this.formData);
    alert('Registered Successfully!');
    this.router.navigate(["/login"]);
  }
}
