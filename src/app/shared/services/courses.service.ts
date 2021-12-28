import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';
  private url = `${BASE_URL}/${this.model}`;

  constructor(private http: HttpClient) {}

  all(): Observable<object> {
    // This returns an observable
    return this.http.get(this.url);
  }

  find(courseId: number) {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course) {
    return this.http.post(this.url, course);
  }

  update(course) {
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId: number) {
    return this.http.delete(this.getUrlById(courseId));
  }

  private getUrlById(id) {
    return `${this.url}/${id}`;
  }
}
