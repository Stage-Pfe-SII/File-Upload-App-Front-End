import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded-files-recap',
  templateUrl: './uploaded-files-recap.component.html',
  styleUrls: ['./uploaded-files-recap.component.scss']
})
export class UploadedFilesRecapComponent implements OnInit {

  @Input() files :any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getTotalUploadedFilesSize():number{
    let sum = 0;
    this.files.forEach(file => sum += file?.size)
    return sum;
  }

}
