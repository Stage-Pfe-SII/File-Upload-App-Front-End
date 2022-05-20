import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploaded-files-recap',
  templateUrl: './uploaded-files-recap.component.html',
  styleUrls: ['./uploaded-files-recap.component.scss']
})
export class UploadedFilesRecapComponent implements OnInit {

  @Input() files :any[] = [];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getTotalUploadedFilesSize():number{
    let sum = 0;
    this.files.forEach(file => sum += file?.size)
    return sum;
  }

  deleteFile(index:number){
    this.delete.emit(index);
  }
}
