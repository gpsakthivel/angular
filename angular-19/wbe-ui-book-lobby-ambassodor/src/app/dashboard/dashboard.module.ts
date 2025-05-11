import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboar-routes';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../app-material.moduler';
import { KioskComponent } from './components/kiosk/kiosk.component';
import { TodayArrivalComponent } from './components/today-arrival/today-arrival.component';
import { KioskStatusComponent } from './components/kiosk-status/kiosk-status.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { ReservationDetailsDialogComponent } from './dialogs/reservation-details-dialog/reservation-details-dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    KioskComponent,
    TodayArrivalComponent,
    KioskStatusComponent,
    ConfirmationDialogComponent,
    ReservationDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMaterialModule  ]
})
export class DashboardModule { }
