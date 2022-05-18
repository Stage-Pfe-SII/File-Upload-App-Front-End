import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-stepper',
  templateUrl: './file-upload-stepper.component.html',
  styleUrls: ['./file-upload-stepper.component.scss']
})
export class FileUploadStepperComponent implements OnInit {

  files = [];

  constructor() { }

  ngOnInit(): void {
  }

  uploadFiles(files:any){
    this.files = files
  }

}
