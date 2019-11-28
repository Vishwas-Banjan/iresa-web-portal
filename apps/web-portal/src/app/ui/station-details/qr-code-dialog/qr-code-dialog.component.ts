import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogQrCodeData {
  code: string;
}

@Component({
  selector: 'iresa-portal-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QRCodeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<QRCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogQrCodeData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
