import { Component, OnInit } from '@angular/core';
import { Institute } from 'src/app/models/institute.model';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-list-adminstitute',
  templateUrl: './list-adminstitute.component.html',
  styleUrls: ['./list-adminstitute.component.css'],
})
export class ListAdminstituteComponent implements OnInit {
  institutes: Institute[];
  constructor(private instituteService: InstituteService) {}

  ngOnInit(): void {
    this.institutes = this.instituteService.getItems();
  }
}
