import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FileUploadStepperComponent } from './components/file-upload-stepper/file-upload-stepper.component';
import { LayoutComponent } from './layout/layout.component';
import { TransfertHistoryComponent } from './components/transfert-history/transfert-history.component';
import { TransfertDetailsComponent } from './components/transfert-details/transfert-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: FileUploadStepperComponent,
      },
      {
        path: 'transferts',
        component: TransfertHistoryComponent,
      },
      {
        path: 'transferts/:id',
        component: TransfertDetailsComponent,
      },
    ]
  },
  {
    path: '**',
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
