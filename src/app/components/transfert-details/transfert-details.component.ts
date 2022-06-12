import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TransfertService } from 'src/app/services/transfert.service';

@Component({
  selector: 'app-transfert-details',
  templateUrl: './transfert-details.component.html',
  styleUrls: ['./transfert-details.component.scss']
})
export class TransfertDetailsComponent implements OnInit {
  
  transfert!:any;
  totalTransfertSize = 0;

  constructor(
    private transfertService:TransfertService,
    private route:ActivatedRoute,
    private snackBar: MatSnackBar
    ) { }



  ngOnInit(): void {
    this.transfertService.getTransfert(this.route.snapshot.params['id']).subscribe(
      data => {
       this.transfert = data
      }
    )
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
