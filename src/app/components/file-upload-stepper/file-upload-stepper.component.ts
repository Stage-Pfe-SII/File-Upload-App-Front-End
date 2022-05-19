import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload-stepper',
  templateUrl: './file-upload-stepper.component.html',
  styleUrls: ['./file-upload-stepper.component.scss']
})
export class FileUploadStepperComponent implements OnInit {

  files = [];
  contactDetails = {};

  constructor() { }

  ngOnInit(): void {
  }

  uploadFiles(files:any){
    this.files = files
  }
  
  deleteFile(index:number){
    this.files.splice(index, 1);
    console.log(this.files);
  }

  onContactDetailsFormSubmit($event:any){
    console.log('stepper component')
    this.contactDetails = $event;
    console.log(this.contactDetails);
  }
}
