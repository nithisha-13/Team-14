import { Component, Input, OnInit } from '@angular/core';
import { Institute } from 'src/app/models/institute.model';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.css'],
})
export class ViewInstituteComponent implements OnInit {
  @Input() institute: Institute;
  constructor(private instituteService: InstituteService) {}

  ngOnInit(): void {}
  onSelectItem() {
    this.instituteService.itemSelectedEvent.emit(this.institute);
  }
}
