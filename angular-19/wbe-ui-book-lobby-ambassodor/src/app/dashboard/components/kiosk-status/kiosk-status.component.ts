import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { kioskDetails, userDetails } from '../../services/models/kiosk/kios-details';
import { allKioskDetails, kioskDetsils,kioskUsageInfo, currentKioskUser } from '../../services/constants/kioskDetsils';
import { kioskMessageConst } from '../../../shared/constants/kiosk-constants.ts/kiosk-message';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ReservationDetailsDialogComponent } from '../../dialogs/reservation-details-dialog/reservation-details-dialog.component';
@Component({
  selector: 'app-kiosk-status',
  templateUrl: './kiosk-status.component.html',
  styleUrl: './kiosk-status.component.scss'
})
export class KioskStatusComponent {

  kioskId!:string | null;
  kioskDetails: kioskDetails = kioskUsageInfo;
  userDetails!: userDetails;
  kioskDetailedStatus:any = {};
  kioskStatusProperty: any = {}
  kioskUserDetail:any = currentKioskUser;
  kioskMessageConst = kioskMessageConst

  constructor(private route: ActivatedRoute, private router: Router,   public dialog: MatDialog) {
    this.kioskId = this.route.snapshot.paramMap.get('id');
    this.kioskDetailedStatus = allKioskDetails.find(item=> item.kioskId === this.kioskId) || {}
    this.kioskStatusProperty = kioskDetsils.find(item=> item.name === this.kioskDetailedStatus.status) || {}
  }

  ngOnInit(){
    const params = this.route.snapshot.params;

  } 

  backNavigator(){
    this.router.navigate(['kiosk'], { relativeTo: this.route });
  }

  openConfirmationDialog(){
    const dialogRef =this.dialog.open(ConfirmationDialogComponent, {
      width: '25%',
      height: '31%',
      panelClass: ['confirm-dialog'],
      autoFocus: false,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((res:boolean)=>{
      if(res){
        this.dialog.open(ReservationDetailsDialogComponent, {
          width: '40%',
          height: '70%',
          panelClass: ['confirm-dialog'],
          autoFocus: false,
          disableClose: true,
          data: this.kioskUserDetail
        });
      }
    })
  }

}
