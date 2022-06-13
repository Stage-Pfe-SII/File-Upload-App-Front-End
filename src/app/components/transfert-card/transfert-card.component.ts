import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-transfert-card',
  templateUrl: './transfert-card.component.html',
  styleUrls: ['./transfert-card.component.scss']
})
export class TransfertCardComponent implements OnInit {

  @Input() transfert:any;
  today = new Date();
  
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  copyDownloadLink(event:any){
    event.preventDefault();
    navigator.clipboard.writeText(event.target.getAttribute('href'));
    this.openSnackBar()
  }

  openSnackBar() {
    this.snackBar.open('Download Link copied to clipboard!','',{
      duration : 1000
    })

}
}