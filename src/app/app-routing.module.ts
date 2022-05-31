import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '1',
    pathMatch: 'full',
    component: UploadComponent,
  },
  {
    path: '2',
    pathMatch: 'full',
    component: NavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
