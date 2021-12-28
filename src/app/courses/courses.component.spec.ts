import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../shared/services/courses.service';

import { CoursesComponent } from './courses.component';

const coursesServiceStub = {
  all: () => {
    return { subscribe: () => {} };
  },
  delete: () => {
    return { subscribe: () => {} };
  },
};

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let de: DebugElement;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      // imports: [HttpClientModule],
      // Let's mock the service instead:
      providers: [{ provide: CoursesService, useValue: coursesServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    // Let's spy on method calls
    coursesService = de.injector.get(CoursesService);
    fixture.detectChanges();
  });

  // this will fail if http client is not imported here (OR MOCKED) in the test
  // as the real component is depending on that implicitily
  // via dependency injection
  // You should mock it!!
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call coursesService.delete on delete', () => {
    spyOn(coursesService, 'delete').and.callThrough();
    component.deleteCourse(1);
    expect(coursesService.delete).toHaveBeenCalledWith(1);
  });
});
