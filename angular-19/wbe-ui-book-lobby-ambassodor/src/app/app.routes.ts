import { RouterModule, Routes } from '@angular/router'

import { NgModule } from '@angular/core'
export const routes: Routes = [
    {
        path: 'llay',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
})

export class AppRoutingModule { }

