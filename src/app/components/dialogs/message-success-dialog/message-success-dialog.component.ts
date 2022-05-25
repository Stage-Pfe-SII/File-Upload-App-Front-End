import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{

}

@Component({
  selector: 'app-message-success-dialog',
  templateUrl: './message-success-dialog.component.html',
  styleUrls: ['./message-success-dialog.component.scss']
})
export class MessageSuccessDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MessageSuccessDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) private data : DialogData) {
      setTimeout(()=>{
        this.onClose()
      }, 1500)
     }

  ngOnInit(): void {
    
  }

  onClose(){
    this.dialogRef.close()
  }

}
