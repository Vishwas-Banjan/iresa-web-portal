import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SideNavModule, HeaderModule } from '@iresa/shared/ui';
import { DashboardDataModule } from '@iresa/web-portal-data';
import { MusicSearchModule } from '../music-search/music-search.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SideNavModule,
    DashboardDataModule,
    HeaderModule,
    MusicSearchModule
  ]
})
export class DashboardModule {}
