import { Component, Inject } from '@angular/core';
import { kioskMessageConst } from '../../../shared/constants/kiosk-constants.ts/kiosk-message';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-details-dialog',
  templateUrl: './reservation-details-dialog.component.html',
  styleUrl: './reservation-details-dialog.component.scss'
})
export class ReservationDetailsDialogComponent {
  kioskMessageConst = kioskMessageConst;
  guestDetails:any= {}

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<String>){
  }

  ngOnInit(){
    this.guestDetails = this.data;
  }
  
  closeDialog(msg:boolean = false ){
    this.dialogRef.close(msg)
  }

}
