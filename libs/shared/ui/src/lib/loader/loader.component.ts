import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'iresa-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
