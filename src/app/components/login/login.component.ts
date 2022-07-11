import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginPayLoad } from './login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData:any={};
  loginForm:FormGroup;
  loginpayload:LoginPayLoad;
  constructor(private formbuilder:FormBuilder) { 
    this.loginpayload={
      email:'',
      password:'',
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^([a-zA-Z]+.*?)+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password : new FormControl('', [Validators.required,
        Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$') ]),
    });
  }
  loginFunc() {
    console.log(this.formData);
  }

}
