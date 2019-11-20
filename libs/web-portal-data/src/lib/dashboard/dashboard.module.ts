import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './state/dashboard.reducer';
import { DashboardEffects } from './state/dashboard.effects';
import { DashboardFacade } from './state/dashboard.facade';
import { DataPersistence } from '@nrwl/angular';
import { DashboardService } from './state/dashboard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDashboard.DASHBOARD_FEATURE_KEY,
      fromDashboard.reducer
    ),
    EffectsModule.forFeature([DashboardEffects])
  ],
  providers: [DashboardFacade, DataPersistence, DashboardService]
})
export class DashboardDataModule {}
