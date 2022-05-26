import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploaded-files-recap',
  templateUrl: './uploaded-files-recap.component.html',
  styleUrls: ['./uploaded-files-recap.component.scss']
})
export class UploadedFilesRecapComponent implements OnInit {
  list =  Array.from({length: 3}, (_, i) => `Nav Item ${i + 1}`);
  @Input() files :File[] = [];
  @Output() delete = new EventEmitter();
  @Input() allowedSize : boolean = true
  @Input() allowedType: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  deleteFile(index:number){
    this.delete.emit(index);
  }

  
}
