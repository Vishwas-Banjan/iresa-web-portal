import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAlbums from './state/albums.reducer';
import { AlbumsEffects } from './state/albums.effects';
import { AlbumsFacade } from './state/albums.facade';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAlbums.ALBUMS_FEATURE_KEY, fromAlbums.reducer),
    EffectsModule.forFeature([AlbumsEffects])
  ],
  providers: [AlbumsFacade, DataPersistence]
})
export class AlbumsDataModule {}
