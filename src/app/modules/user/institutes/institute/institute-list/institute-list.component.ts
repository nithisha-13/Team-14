import { Component, OnInit } from '@angular/core';
import { Institute } from 'src/app/models/institute.model';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css'],
})
export class InstituteListComponent implements OnInit {
  institutes: Institute[];
  constructor(private instituteService: InstituteService) {}

  ngOnInit(): void {
    this.institutes = this.instituteService.getItems();
  }
}
