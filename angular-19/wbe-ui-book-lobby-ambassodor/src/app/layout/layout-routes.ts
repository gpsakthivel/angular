import { RouterModule, Routes } from '@angular/router'  
import { NgModule } from '@angular/core'
import { ErrorComponent } from './error/error.component';
export const routes: Routes = [
    {
        path: "dashboard", 
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),     
    },
    {
        path: '404',
        component: ErrorComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LayoutRoutingModule { }

