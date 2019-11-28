import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStations from './state/stations.reducer';
import { StationsEffects } from './state/stations.effects';
import { StationsFacade } from './state/stations.facade';
import { StationsService } from './state/stations.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromStations.STATIONS_FEATURE_KEY,
      fromStations.reducer
    ),
    EffectsModule.forFeature([StationsEffects])
  ],
  providers: [StationsFacade, StationsService]
})
export class StationsDataModule {}
