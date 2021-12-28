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

  currentCourse = null;

  courses = null;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    // Do initialization stuff here instead of the constructor
    this.resetSelectedCourse();
    this.courses = this.coursesService.all();
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
    this.currentCourse = { ...course };
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    }
    this.coursesService.create(course);
    this.courses = this.coursesService.all();
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId);
    this.courses = this.coursesService.all();
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
