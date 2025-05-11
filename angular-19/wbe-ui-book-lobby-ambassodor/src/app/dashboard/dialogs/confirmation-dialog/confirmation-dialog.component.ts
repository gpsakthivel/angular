import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {

  constructor(private dialogRef: MatDialogRef<String>,){

  }

  closeDialog(msg:boolean = false ){
    this.dialogRef.close(msg)
  }

}
