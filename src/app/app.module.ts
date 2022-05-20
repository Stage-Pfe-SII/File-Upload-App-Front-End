import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';





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
    FormatFileSizePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
