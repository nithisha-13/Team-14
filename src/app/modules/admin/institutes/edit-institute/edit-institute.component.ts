import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditInstitutePayLoad } from './edit-institute.payload';

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css'],
})
export class EditInstituteComponent implements OnInit {
  formData:any={};
  editinstituteForm:FormGroup;
  editinstitutepayload:EditInstitutePayLoad;
  constructor(private formbuilder:FormBuilder) { 
    this.editinstitutepayload={
      name:'',
      imageUrl:'',
      location:'',
      phone:'',
      description:'',
    }
  }

  ngOnInit(): void {
    this.editinstituteForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern('^[A-Z+a-z ]{2,40}$')]),
      imageUrl: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]{1,20}")]),
      phone:new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
      description: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9]{2,100}")]),
    });
  }
  editInst() {
    console.log(this.formData);
  }
}
