import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'iresa-portal-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicSearchComponent implements OnInit {
  searchInput = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
