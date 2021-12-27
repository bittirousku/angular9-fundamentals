import { Component, OnInit } from '@angular/core';

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

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Course number two',
      description: 'Learn moar',
      percentComplete: 50,
      favorite: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Do initialization stuff here instead of the constructor
    this.resetSelectedCourse();
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

  saveCourse() {
    console.log('save course!!');
    this.courses = this.courses.map((course) =>
      course.id === this.currentCourse.id ? this.currentCourse : course
    );
  }

  deleteCourse(courseId) {
    this.courses = this.courses.filter((course) => course.id !== courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
