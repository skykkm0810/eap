import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceConListComponent } from './page/device-con-list/device-con-list.component';
import { SeniorConListComponent } from './page/senior-con-list/senior-con-list.component';

const routes: Routes = [
  { path: 'deviceConList', component: DeviceConListComponent },
  { path: 'seniorConList', component: SeniorConListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
