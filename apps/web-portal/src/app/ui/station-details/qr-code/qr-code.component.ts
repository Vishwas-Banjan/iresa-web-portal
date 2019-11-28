import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { QRCodeDialogComponent } from '../qr-code-dialog/qr-code-dialog.component';

@Component({
  selector: 'iresa-portal-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QRCodeComponent implements OnInit {
  @Input()
  code;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(QRCodeDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: { code: this.code }
    });
  }
}
