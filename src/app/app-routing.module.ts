import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

// Challenge
// Step 1: Generate a new users component
// Step 2: Create a new users route
// Step 3: Update sidenav to route to new users route

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  // Let's lazy load the login component:
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
