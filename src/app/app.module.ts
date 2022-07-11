import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewinstituteComponent } from './modules/user/institutes/viewinstitute/viewinstitute.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EnrollCourseComponent } from './modules/user/enroll-course/enroll-course.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddCourseComponent } from './modules/admin/courses/add-course/add-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddInstituteComponent } from './modules/admin/institutes/add-institute/add-institute.component';
import { EditInstituteComponent } from './modules/admin/institutes/edit-institute/edit-institute.component';
import { EditCourseComponent } from './modules/admin/courses/edit-course/edit-course.component';
import { AddStudentComponent } from './modules/admin/student/add-student/add-student.component';
import { EditStudentComponent } from './modules/admin/student/edit-student/edit-student.component';
import { CourseComponent } from './modules/admin/courses/course/course.component';
import { CourseListComponent } from './modules/admin/courses/course/course-list/course-list.component';
import { ViewCourseComponent } from './modules/admin/courses/course/course-list/view-course/view-course.component';
import { CourseService } from './services/course.service';
import { UserCourseComponent } from './modules/user/courses/user-course/user-course.component';
import { ListUsercourseComponent } from './modules/user/courses/user-course/list-usercourse/list-usercourse.component';
import { ViewUsercourseComponent } from './modules/user/courses/user-course/list-usercourse/view-usercourse/view-usercourse.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'course', component: EnrollCourseComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path:'add-course',component: AddCourseComponent},
  { path:'edit-course',component: EditCourseComponent},
  { path: 'add-institute', component:AddInstituteComponent},
  { path: 'edit-institute', component:EditInstituteComponent},
  { path: 'view-institute', component:ViewinstituteComponent},
  { path:'add-student',component: AddStudentComponent},
  { path:'edit-student',component: EditStudentComponent},
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    ViewinstituteComponent,
    EnrollCourseComponent,
    AddCourseComponent,
    AddInstituteComponent,
    EditInstituteComponent,
    EditCourseComponent,
    AddStudentComponent,
    EditStudentComponent,
    CourseComponent,
    CourseListComponent,
    ViewCourseComponent,
    UserCourseComponent,
    ListUsercourseComponent,
    ViewUsercourseComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
