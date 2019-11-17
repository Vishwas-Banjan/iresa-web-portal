import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'iresa-portal-search-option',
  templateUrl: './search-option.component.html',
  styleUrls: ['./search-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOptionComponent implements OnInit {
  @Input()
  item;

  constructor() {}

  ngOnInit() {}
}
