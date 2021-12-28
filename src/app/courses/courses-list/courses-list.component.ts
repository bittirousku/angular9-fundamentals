import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses; // What is happening here?
  @Output() selected = new EventEmitter(); // What is happening here?
  @Output() deleted = new EventEmitter(); // What is happening here?
}
