import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './layout/aside/aside.component';
import { TopComponent } from './layout/top/top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SeniorListComponent } from './page/senior-list/senior-list.component';
import { ActivityListComponent } from './page/activity-list/activity-list.component';
import { TaskListComponent } from './page/task-list/task-list.component';
import { CctvListComponent } from './page/cctv-list/cctv-list.component';
import { DietaryComponent } from './page/dietary/dietary.component';
import { ChartsModule } from 'ng2-charts';
import { NoticeAddComponent } from './page/notice-add/notice-add.component';
import { SeniorDetailComponent } from './page/senior-detail/senior-detail.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotobookComponent } from './page/photobook/photobook.component';
import { SeniorAddComponent } from './modal/senior-add/senior-add.component';
import { SeniorUpdateComponent } from './modal/senior-update/senior-update.component';
import { CctvAddComponent } from './modal/cctv-add/cctv-add.component';
import { CctvDetailComponent } from './page/cctv-detail/cctv-detail.component';
import { ReadyComponent } from './page/ready/ready.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { TecherDetailComponent } from './page/techer-detail/techer-detail.component';
import { TeachersLectureComponent } from './modal/teachers-lecture/teachers-lecture.component';
import { LectureListComponent } from './page/lecture-list/lecture-list.component';
import { LectureDetailComponent } from './page/lecture-detail/lecture-detail.component';
import { LectureCalendarComponent } from './page/lecture-calendar/lecture-calendar.component';
import { LectureEnrollComponent } from './page/lecture-enroll/lecture-enroll.component';
import { CompanyListComponent } from './page/company-list/company-list.component';
import { CompanyDetailComponent } from './page/company-detail/company-detail.component';
import { CompanyEnrollComponent } from './page/company-enroll/company-enroll.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { CustomerDetailComponent } from './page/customer-detail/customer-detail.component';
import { ServiceListComponent } from './page/service-list/service-list.component';
import { ServiceDetailComponent } from './page/service-detail/service-detail.component';
import { TeacherEnrollComponent } from './page/teacher-enroll/teacher-enroll.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    TopComponent,
    DashboardComponent,
    SeniorListComponent,
    ActivityListComponent,
    TaskListComponent,
    CctvListComponent,
    DietaryComponent,
    NoticeAddComponent,
    SeniorDetailComponent,
    PhotobookComponent,
    SeniorAddComponent,
    SeniorUpdateComponent,
    CctvAddComponent,
    CctvDetailComponent,
    ReadyComponent,
    TeacherComponent,
    TecherDetailComponent,
    TeachersLectureComponent,
    LectureListComponent,
    LectureDetailComponent,
    LectureCalendarComponent,
    LectureEnrollComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyEnrollComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    TeacherEnrollComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ChartsModule,
    NgbModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
