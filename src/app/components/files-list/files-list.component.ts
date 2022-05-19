import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {

  @Input() files:any[] = [];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteFile(index:number){
    this.delete.emit(index);
  }

}
