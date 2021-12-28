import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  themeColor = 'blue';

  currentLesson = null;
  courseLessons = null;

  // Challenge:
  // STEP 1 : create a LessonsService
  // ng generate service shared/services/lessons
  // STEP 2 add the lessons service to app.module
  // STEP 3: inject lessons service into component
  // STEP 4: move lessons to service and consume in component

  // Challenge 2
  // Step 1: create a LessonsList child component
  // Step 2: Create the appropriate inputs and outputs
  // Step 3: Render LessonsList component

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  updateColor() {
    console.log('update color');
    this.themeColor = 'green';
  }

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
}
