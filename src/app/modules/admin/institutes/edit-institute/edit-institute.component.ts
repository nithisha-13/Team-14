import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css'],
})
export class EditInstituteComponent implements OnInit {
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
  Edit() {}
}
