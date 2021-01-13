import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PhotobookComponent } from './page/photobook/photobook.component';
import { ReadyComponent } from './page/ready/ready.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { TecherDetailComponent } from './page/techer-detail/techer-detail.component';
import { TeacherEnrollComponent } from './page/teacher-enroll/teacher-enroll.component';
import { LectureListComponent } from './page/lecture-list/lecture-list.component';
import { LectureDetailComponent } from './page/lecture-detail/lecture-detail.component';
import { LectureEnrollComponent } from './page/lecture-enroll/lecture-enroll.component';
import { LectureCalendarComponent } from './page/lecture-calendar/lecture-calendar.component';
import { CompanyListComponent } from './page/company-list/company-list.component';
import { CompanyDetailComponent } from './page/company-detail/company-detail.component';
import { CompanyEnrollComponent } from './page/company-enroll/company-enroll.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { CustomerDetailComponent } from './page/customer-detail/customer-detail.component';
import { ServiceListComponent } from './page/service-list/service-list.component';
import { ServiceDetailComponent } from './page/service-detail/service-detail.component';
import { LoginComponent } from './layout/login/login.component';
import { JoinComponent } from './layout/join/join.component';
import { FindAccountComponent } from './page/find-account/find-account.component';
import { ChangePasswardComponent } from './modal/change-passward/change-passward.component';

const routes: Routes = [
  { path: TAGS.DASHBOARD, component: DashboardComponent },
  { path: TAGS.PHOTOBOOK, component: PhotobookComponent },
  { path: TAGS.READY, component: ReadyComponent },
  { path: TAGS.TEACHER, component: TeacherComponent },
  { path: TAGS.TECHERDETAIL, component: TecherDetailComponent },
  { path: TAGS.TEACHERENROLL, component: TeacherEnrollComponent },
  { path: TAGS.LECTURELIST, component: LectureListComponent },
  { path: TAGS.LECTUREDETAIL, component: LectureDetailComponent },
  { path: TAGS.LECTUREENROLL, component: LectureEnrollComponent },
  { path: TAGS.COMPANYLIST, component: CompanyListComponent },
  { path: TAGS.COMPANYDETAIL, component: CompanyDetailComponent },
  { path: TAGS.COMPANYENROLL, component: CompanyEnrollComponent },
  { path: TAGS.CUSTOMERLIST, component: CustomerListComponent },
  { path: TAGS.CUSTOMERDETAIL, component: CustomerDetailComponent },
  { path: TAGS.SERVICELIST, component: ServiceListComponent },
  { path: TAGS.SERVICEDETAIL, component: ServiceDetailComponent },
  { path: TAGS.LOGIN, component: LoginComponent },
  { path: TAGS.JOIN, component: JoinComponent },
  { path: TAGS.FINDACCOUNT, component: FindAccountComponent },
  { path: TAGS.CHANGEPASSWARD, component: ChangePasswardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
