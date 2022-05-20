import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit, ControlValueAccessor {

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
