import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // Challenge
  // Step 1: display courses with ngFor
  // Step 2 : add event handler to select course
  // Step 3: display raw json of selected course

  // NEW Challenge
  // Step 1 Complete remote update call
  // Step 2 Complete remote delete call
  // Step 3 Fix UI on completed operation (de-select the course)

  currentCourse = null;

  courses = null;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    // Do initialization stuff here instead of the constructor
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.currentCourse = emptyCourse;
  }

  selectCourse(course) {
    // Clone the object to break the coupling
    // This is done in CourseDetailsComponents in the course...?
    // BECAUSE this should be an implementation detail of the child,
    // not the responsibility of this component!
    this.currentCourse = { ...course };
  }

  loadCourses() {
    this.coursesService.all().subscribe((courses) => (this.courses = courses));
  }

  refreshCourses() {
    this.loadCourses();
    this.resetSelectedCourse();
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService
        .update(course)
        .subscribe((_) => this.refreshCourses());
    } else {
      this.coursesService
        .create(course)
        .subscribe((_) => this.refreshCourses());
    }
  }

  deleteCourse(courseId) {
    this.coursesService
      .delete(courseId)
      .subscribe((_) => this.refreshCourses());
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
