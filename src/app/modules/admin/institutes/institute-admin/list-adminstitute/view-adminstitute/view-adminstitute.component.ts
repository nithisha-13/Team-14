import { Component, Input, OnInit } from '@angular/core';
import { Institute } from 'src/app/models/institute.model';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-view-adminstitute',
  templateUrl: './view-adminstitute.component.html',
  styleUrls: ['./view-adminstitute.component.css'],
})
export class ViewAdminstituteComponent implements OnInit {
  @Input() institute: Institute;
  constructor(private instituteService: InstituteService) {}

  ngOnInit(): void {}
  onSelectItem() {
    this.instituteService.itemSelectedEvent.emit(this.institute);
  }
}
