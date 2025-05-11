import { BlockScrollStrategy, OverlayModule } from '@angular/cdk/overlay'
import { MAT_DATEPICKER_SCROLL_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker'
import { MAT_SELECT_SCROLL_STRATEGY, MatSelectModule } from '@angular/material/select'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatNativeDateModule } from '@angular/material/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatRippleModule } from '@angular/material/core'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatStepperModule } from '@angular/material/stepper'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import {MatListModule} from '@angular/material/list';

import { NgModule } from '@angular/core'

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  imports: [
    MatChipsModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    CommonModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatTooltipModule,
    MatGridListModule,
    MatTableModule,
    OverlayModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    FormsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatListModule
  ],
  declarations: [],
  exports: [
    MatSidenavModule,
    MatChipsModule,
    MatSelectModule,
    MatToolbarModule,
    OverlayModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    FormsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatListModule
  ],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] },
    { provide: MAT_DATEPICKER_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] },
    { provide: MatDialogRef, useValue: {} },
  ],
})
export class AppMaterialModule { }
