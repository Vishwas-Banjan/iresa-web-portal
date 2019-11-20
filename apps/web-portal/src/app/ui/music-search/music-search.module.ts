import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { SearchOptionComponent } from './search-option/search-option.component';
import { LoadImageModule } from '@iresa/shared/utilities';

@NgModule({
  declarations: [MusicSearchComponent, SearchOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    LoadImageModule
  ],
  exports: [MusicSearchComponent]
})
export class MusicSearchModule {}
