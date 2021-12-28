import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = [
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

  all() {
    return this.courses;
  }

  find(courseId: number) {}

  create(course) {
    console.log('course', course);
    course.id = new Date().getTime();
    this.courses = [...this.courses, course];
  }

  update(course) {
    this.courses = this.courses.map((c) => (course.id === c.id ? course : c));
  }

  delete(courseId: number) {
    this.courses = this.courses.filter((c) => c.id !== courseId);
  }
}
