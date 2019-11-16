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

@NgModule({
  declarations: [MusicSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  exports: [MusicSearchComponent]
})
export class MusicSearchModule {}
