import { NgModule } from '@angular/core'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { MainComponent } from './layout/main/main.component'
import { AppMaterialModule } from './app-material.moduler'
import { AppRoutingModule } from './app.routes'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './shared/widgets/header/header.component';

@NgModule({ declarations: [
        MainComponent,
        HeaderComponent,
    ],
    bootstrap: [MainComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        AppRoutingModule,
        CommonModule], providers: [
        {
            provide: Window,
            useValue: window,
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }