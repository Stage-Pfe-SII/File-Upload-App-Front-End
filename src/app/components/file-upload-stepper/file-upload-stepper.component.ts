import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Transfert } from 'src/app/models/Transfert.model';
import { UploadServiceService } from 'src/app/services/upload-service.service';
import { MessageSuccessDialogComponent } from '../dialogs/message-success-dialog/message-success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-stepper',
  templateUrl: './file-upload-stepper.component.html',
  styleUrls: ['./file-upload-stepper.component.scss']
})
export class FileUploadStepperComponent implements OnInit {

  files:File[] = []; // les fichiers
  contactDetails!:Transfert; //objet 
  allowedSize = true
  filesForm!:FormControl;
  stateProgress = 0
  showProgressBar = false
  maxSize = 2//Go
  
  @ViewChild('stepper') private stepper!: MatStepper;
  @ViewChild('contactForm') private contactForm!: any;
  
  constructor(private uploadService: UploadServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  uploadFiles(files:File[]){
    this.files = files
    this.allowedSize = this.lessThanOrEqualMaxSize();
  }
  
  deleteFile(index:number){
    this.files.splice(index, 1);
    this.allowedSize = this.lessThanOrEqualMaxSize();
  }

  lessThanOrEqualMaxSize(){
    let size = 0;
    this.files.forEach(f=>size+=f.size)
    return size/(1024*1024*1024)<=this.maxSize
  }


  onContactDetailsFormSubmit($event:any){
    this.contactDetails = $event;
  }

  resetStepper(){
    this.stepper.reset();
    this.files = [];
    this.contactForm?.contactDetailsForm.reset()
  }

  submitFiles(){  
    this.stateProgress = 0;
    this.showProgressBar = true
    this.uploadService.upload(this.contactDetails, this.files)
    .subscribe(
      event=>{
        if(event.type==HttpEventType.UploadProgress){
          this.stateProgress = Math.round( 100*event.loaded/event.total)
          if(this.stateProgress==100){
            this.dialog.open(MessageSuccessDialogComponent)
          }
        }
      }
    )
  }

}
