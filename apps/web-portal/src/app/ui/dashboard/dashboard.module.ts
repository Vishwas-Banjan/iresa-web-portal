import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SideNavModule, HeaderModule, LoaderModule } from '@iresa/shared/ui';
import {
  DashboardDataModule,
  WebPlaybackDataModule,
  AuthGuardServiceGuard
} from '@iresa/web-portal-data';
import { MusicSearchModule } from '../music-search/music-search.module';
import { RouterModule, Routes } from '@angular/router';
import { MusicPlayerModule } from '../music-player/music-player.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardServiceGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'album/:albumId',
        pathMatch: 'full',
        loadChildren: () =>
          import('../album-list/album-list.module').then(m => m.AlbumListModule)
      },
      {
        path: 'artist/:artistId/albums',
        pathMatch: 'full',
        loadChildren: () =>
          import('../album-list/album-list.module').then(m => m.AlbumListModule)
      },
      {
        path: 'album/:albumId/:trackPos',
        pathMatch: 'full',
        loadChildren: () =>
          import('../album-track-list/album-track-list.module').then(
            m => m.AlbumTrackListModule
          )
      },
      {
        path: 'album/:albumId/tracks',
        pathMatch: 'full',
        loadChildren: () =>
          import('../album-track-list/album-track-list.module').then(
            m => m.AlbumTrackListModule
          )
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SideNavModule,
    DashboardDataModule,
    HeaderModule,
    MusicSearchModule,
    MusicPlayerModule,
    WebPlaybackDataModule,
    LoaderModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthGuardServiceGuard]
})
export class DashboardModule {}
