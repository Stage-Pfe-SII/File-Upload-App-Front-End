import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactDetailsFormComponent } from './components/contact-details-form/contact-details-form.component';
import { FileUploadStepperComponent } from './components/file-upload-stepper/file-upload-stepper.component';
import { FilesUploadComponent } from './components/files-upload/files-upload.component';
import { FileUploadDirective } from './directives/file-upload.directive';
import { FilesListComponent } from './components/files-list/files-list.component';
import { RecapComponent } from './components/recap/recap.component';
import { UploadedFilesRecapComponent } from './components/uploaded-files-recap/uploaded-files-recap.component';
import { FormatFileSizePipe } from './pipes/format-file-size.pipe';

import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { MessageSuccessDialogComponent } from './components/dialogs/message-success-dialog/message-success-dialog.component';
import { MaxSizeReachedComponent } from './components/dialogs/max-size-reached/max-size-reached.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app.routing';
import { TransfertHistoryComponent } from './components/transfert-history/transfert-history.component';
import { TransfertDetailsComponent } from './components/transfert-details/transfert-details.component';
import { TransfertCardComponent } from './components/transfert-card/transfert-card.component';
import { TransfertSearchPipe } from './pipes/transfert-search.pipe';
import { RemaningDaysPipe } from './pipes/remaning-days.pipe';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactDetailsFormComponent,
    FileUploadStepperComponent,
    FilesUploadComponent,
    FileUploadDirective,
    FilesListComponent,
    RecapComponent,
    UploadedFilesRecapComponent,
    FormatFileSizePipe,
    MessageSuccessDialogComponent,
    MaxSizeReachedComponent,
    LayoutComponent,
    TransfertHistoryComponent,
    TransfertDetailsComponent,
    TransfertCardComponent,
    TransfertSearchPipe,
    RemaningDaysPipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
