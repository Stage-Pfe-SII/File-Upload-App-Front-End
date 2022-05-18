import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  @Output() getFiles = new EventEmitter();

  files:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  fileBrowseHandler(files:any){
    for(const file of files)
      this.files.push(file)

     this.getFiles.emit(this.files); 
  }

  onFileDroped(files:any){
    for(const file of files)
      this.files.push(file)

      this.getFiles.emit(this.files); 
  } 
}
