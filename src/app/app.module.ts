import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactDetailsFormComponent } from './components/contact-details-form/contact-details-form.component';
import { FileUploadStepperComponent } from './components/file-upload-stepper/file-upload-stepper.component';
import { FilesUploadComponent } from './components/files-upload/files-upload.component';
import { FileUploadDirective } from './directives/file-upload.directive';
import { FilesListComponent } from './components/files-list/files-list.component';
import { RecapComponent } from './components/recap/recap.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactDetailsFormComponent,
    FileUploadStepperComponent,
    FilesUploadComponent,
    FileUploadDirective,
    FilesListComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
