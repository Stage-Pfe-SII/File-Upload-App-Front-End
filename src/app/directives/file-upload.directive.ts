import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {

  @Output() fileDroped = new EventEmitter();

  @HostListener('dragover',['$event'])
  onDragOver(event:any){
    event.preventDefault();
    event.stopPropagation();

  }

  @HostListener('dragleave',['$event']) onDragLeave(event:any){
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop',['$event']) onDrop(event:any){
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files
    this.fileDroped.emit(files);
    console.log(files);
  }
}
