import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SideNavModule, HeaderModule } from '@iresa/shared/ui';
import { DashboardDataModule } from '@iresa/web-portal-data';
import { MusicSearchModule } from '../music-search/music-search.module';
import { RouterModule, Routes } from '@angular/router';
import { MusicPlayerModule } from '../music-player/music-player.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('.././home/home.module').then(m => m.HomeModule)
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
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}
