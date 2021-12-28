import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  originalTitle;
  currentCourse;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // @Input() currentCourse;
  // Let's decouple the form state from the global state
  // WTF is happening here?
  // I solved this problem in CoursesComponent by cloning the object
  @Input() set course(value) {
    if (value) {
      // this.currentCourse = Object.assign({}, value);
      this.currentCourse = { ...value };
      this.originalTitle = value.title;
    }
  }
}
