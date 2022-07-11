import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddInstitutePayLoad } from './add-institute.payload';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css'],
})
export class AddInstituteComponent implements OnInit {
  formData:any={};
  instituteForm:FormGroup;
  addinstitutepayload:AddInstitutePayLoad;
  constructor(private formbuilder:FormBuilder) { 
    this.addinstitutepayload={
      name:'',
      imageUrl:'',
      location:'',
      phone:'',
      description:'',
    }
  }

  ngOnInit(): void {
    this.instituteForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z ]{2,40}$')]),
      imageUrl: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]{1,20}")]),
      phone:new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
      description: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")]),
    });
  }
  addInst() {
    console.log(this.formData);
  }
}
