import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-file-upload-stepper',
  templateUrl: './file-upload-stepper.component.html',
  styleUrls: ['./file-upload-stepper.component.scss']
})
export class FileUploadStepperComponent implements OnInit {

  files = [];
  contactDetails = {};
  filesForm!:FormControl;
  
  @ViewChild('stepper') private stepper!: MatStepper;
  @ViewChild('contactForm') private contactForm!: any;
  
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

  resetStepper(){
    this.stepper.reset();
    this.files = [];
    this.contactForm?.contactDetailsForm.reset()
  }

  submitFiles(){
  
    console.log(this.contactDetails)
    console.log(this.files)
  }
}
