import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailsComponent } from './station-details.component';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormComponent } from './form/form.component';
import { StationsDataModule, StationResolver } from '@iresa/web-portal-data';
import { ConnectFormModule } from '@iresa/shared/utilities';
import { QRCodeModule } from 'angularx-qrcode';
import { QRCodeDialogComponent } from './qr-code-dialog/qr-code-dialog.component';
import { A11yModule } from '@angular/cdk/a11y';
import { QRCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    StationDetailsComponent,
    FormComponent,
    QRCodeComponent,
    QRCodeDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    StationsDataModule,
    ConnectFormModule,
    QRCodeModule,
    A11yModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: { data: StationResolver },
        component: StationDetailsComponent
      }
    ])
  ],
  providers: [StationResolver],
  exports: [StationDetailsComponent],
  entryComponents: [QRCodeDialogComponent]
})
export class StationDetailsModule {}
