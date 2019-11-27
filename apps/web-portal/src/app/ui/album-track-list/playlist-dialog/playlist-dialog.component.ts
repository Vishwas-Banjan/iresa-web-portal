import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'iresa-portal-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
