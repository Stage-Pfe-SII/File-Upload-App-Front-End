import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {

  @Output() fileDroped = new EventEmitter();
  @HostBinding('class.isDragOver') isDragOver!:boolean;  

  @HostListener('dragover',['$event'])
  onDragOver(event:any){
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  @HostListener('dragleave',['$event']) onDragLeave(event:any){
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  @HostListener('drop',['$event']) onDrop(event:any){
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files
    this.fileDroped.emit(files);
    this.isDragOver = false;
  }
}
