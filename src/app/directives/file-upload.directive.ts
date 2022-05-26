import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaxSizeReachedComponent } from '../components/dialogs/max-size-reached/max-size-reached.component';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {

  @Output() fileDroped = new EventEmitter();
  @HostBinding('class.isDragOver') isDragOver!:boolean;  
  @Input() totalUploadFilesSize!:number;
  // @HostBinding('class.isMaxSizeExceded') isMaxSizeExceded!:boolean;
  maxSize = 1024 * 1024 * 1024 * 2; // 2Go 

  constructor( private dialog: MatDialog){

  }

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
    this.isDragOver = false;
    let dropedFilesSize = 0;
    for (var i = 0; i < files.length; i++) {
      dropedFilesSize += files[i]?.size;  
    }
    
    if(this.totalUploadFilesSize + dropedFilesSize > this.maxSize){
      this.dialog.open(MaxSizeReachedComponent)
    }else{
      this.fileDroped.emit(files);
    }
  }
}
