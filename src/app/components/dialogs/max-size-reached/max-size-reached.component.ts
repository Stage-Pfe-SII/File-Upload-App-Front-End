import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, MessageSuccessDialogComponent } from '../message-success-dialog/message-success-dialog.component';

@Component({
  selector: 'app-max-size-reached',
  templateUrl: './max-size-reached.component.html',
  styleUrls: ['./max-size-reached.component.scss']
})
export class MaxSizeReachedComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<MessageSuccessDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) private data : DialogData) {
      setTimeout(()=>{
        this.onClose()
      }, 3000)
     }

  ngOnInit(): void {
    
  }

  onClose(){
    this.dialogRef.close()
  }

}
