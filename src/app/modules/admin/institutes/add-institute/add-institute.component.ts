import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css'],
})
export class AddInstituteComponent implements OnInit {
  instituteForm = this.formBuilder.group({
    name: '',
    imageUrl: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  Add() {}
}
