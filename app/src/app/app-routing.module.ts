import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import { ActivityListComponent } from './page/activity-list/activity-list.component';
import { CctvListComponent } from './page/cctv-list/cctv-list.component';
import { SeniorListComponent } from './page/senior-list/senior-list.component';
import { TaskListComponent } from './page/task-list/task-list.component';
import { DietaryComponent } from './page/dietary/dietary.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NoticeAddComponent } from './page/notice-add/notice-add.component';
import { SeniorDetailComponent } from './page/senior-detail/senior-detail.component';
import { PhotobookComponent } from './page/photobook/photobook.component';
import { CctvDetailComponent } from './page/cctv-detail/cctv-detail.component';
import { ReadyComponent } from './page/ready/ready.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { TecherDetailComponent } from './page/techer-detail/techer-detail.component';
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

const routes: Routes = [
  { path: TAGS.DASHBOARD, component: DashboardComponent },
  { path: TAGS.SENIORLIST, component: SeniorListComponent },
  { path: TAGS.ACTIVITYLIST, component: ActivityListComponent },
  { path: TAGS.TASKLIST, component: TaskListComponent },
  { path: TAGS.CCTVLIST, component: CctvListComponent },
  { path: TAGS.DIETARYS, component: DietaryComponent },
  { path: TAGS.NOTICEADD, component: NoticeAddComponent },
  { path: TAGS.SENIORDETAIL, component: SeniorDetailComponent },
  { path: TAGS.PHOTOBOOK, component: PhotobookComponent },
  { path: TAGS.CCTVDETAIL, component: CctvDetailComponent },
  { path: TAGS.READY, component: ReadyComponent },
  { path: TAGS.TEACHER, component: TeacherComponent },
  { path: TAGS.TECHERDETAIL, component: TecherDetailComponent },
  { path: TAGS.LECTURELIST, component: LectureListComponent },
  { path: TAGS.LECTUREDETAIL, component: LectureDetailComponent },
  { path: TAGS.LECTUREENROLL, component: LectureEnrollComponent },
  { path: TAGS.COMPANYLIST, component: CompanyListComponent },
  { path: TAGS.COMPANYDETAIL, component: CompanyDetailComponent },
  { path: TAGS.COMPANYENROLL, component: CompanyEnrollComponent },
  { path: TAGS.CUSTOMERLIST, component: CustomerListComponent },
  { path: TAGS.CUSTOMERDETAIL, component: CustomerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
