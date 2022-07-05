import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  registerForm = this.formBuilder.group({
    role: [''],
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit(): void {
    alert('Registered Successfully!');
  }
}
