import { RouterModule, Routes } from '@angular/router'  
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { KioskComponent } from './components/kiosk/kiosk.component';
import { TodayArrivalComponent } from './components/today-arrival/today-arrival.component';
import { KioskStatusComponent } from './components/kiosk-status/kiosk-status.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'kiosk',
            component: KioskComponent,
          },
          {
            path: 'kiosk/:id',
            component: KioskStatusComponent,
          },
          {
            path: 'today',
            component: TodayArrivalComponent
          }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }

