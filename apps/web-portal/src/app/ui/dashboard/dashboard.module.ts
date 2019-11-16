import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SideNavModule, HeaderModule } from '@iresa/shared/ui';
import { DashboardDataModule } from '@iresa/web-portal-data';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SideNavModule, DashboardDataModule, HeaderModule]
})
export class DashboardModule {}
