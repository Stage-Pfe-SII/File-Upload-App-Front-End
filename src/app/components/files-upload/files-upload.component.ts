import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MaxSizeReachedComponent } from '../dialogs/max-size-reached/max-size-reached.component';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit, ControlValueAccessor {

  @Output() getFiles = new EventEmitter();
  files:any[] = [];
  totalFilesSize = 0;
  maxSize = 1024 * 1024 * 1024 * 2;

  constructor( private dialog: MatDialog){

  }
  
  ngOnInit(): void {
    
  }
  
  fileBrowseHandler(files:any){
    let selectedFilesSize = 0;
    for (var i = 0; i < files.length; i++) {
      selectedFilesSize += files[i]?.size;  
    }
    this.calculateUploadedFilesSize();
    if(this.totalFilesSize + selectedFilesSize > this.maxSize){
      this.dialog.open(MaxSizeReachedComponent);
    }else{
      for(const file of files)
      this.files.push(file)
      this.getFiles.emit(this.files); 
    }
  }

  onFileDroped(files:any){
    for(const file of files)
    this.files.push(file)
    this.calculateUploadedFilesSize();
    this.getFiles.emit(this.files); 
  } 

  calculateUploadedFilesSize()
  {
    this.totalFilesSize = 0;
    this.files.forEach(file => {
      this.totalFilesSize += file.size;
  });
  }

  /*
    initisalition de la valeur
  */
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  /*
    what to do on change ==> 
  */
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  /*
  
  */
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
}
