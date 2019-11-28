import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailsComponent } from './station-details.component';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormComponent } from './form/form.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { StationsDataModule, StationResolver } from '@iresa/web-portal-data';
import { ConnectFormModule } from '@iresa/shared/utilities';

@NgModule({
  declarations: [StationDetailsComponent, FormComponent, BarcodeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    StationsDataModule,
    ConnectFormModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: { data: StationResolver },
        component: StationDetailsComponent
      }
    ])
  ],
  providers: [StationResolver],
  exports: [StationDetailsComponent]
})
export class StationDetailsModule {}
