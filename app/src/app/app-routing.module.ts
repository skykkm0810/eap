import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TAGS } from './interface/interface';
import { ActivityListComponent } from './page/activity-list/activity-list.component';
import { CctvListComponent } from './page/cctv-list/cctv-list.component';
import { CenterAComponent } from './page/center-a/center-a.component';
import { CenterBComponent } from './page/center-b/center-b.component';
import { DeviceListComponent } from './page/device-list/device-list.component';
import { NoticeListComponent } from './page/notice-list/notice-list.component';
import { SeniorListComponent } from './page/senior-list/senior-list.component';
import { TaskListComponent } from './page/task-list/task-list.component';
import { WorkerListComponent } from './page/worker-list/worker-list.component';
import { DietaryComponent } from './page/dietary/dietary.component';


const routes: Routes = [
  { path: TAGS.DEVICELIST, component: DeviceListComponent },
  { path: TAGS.SENIORLIST, component: SeniorListComponent },
  { path: TAGS.ACTIVITYLIST, component: ActivityListComponent },
  { path: TAGS.WORKERLIST, component: WorkerListComponent },
  { path: TAGS.TASKLIST, component: TaskListComponent },
  { path: TAGS.CCTVLIST, component: CctvListComponent },
  { path: TAGS.NOTICELIST, component: NoticeListComponent },
  { path: TAGS.CENTERA, component: CenterAComponent },
  { path: TAGS.CENTERB, component: CenterBComponent },
  { path: TAGS.DIETARYS, component: DietaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
