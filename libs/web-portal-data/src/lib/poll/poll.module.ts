import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPoll from './state/poll.reducer';
import { PollEffects } from './state/poll.effects';
import { PollFacade } from './state/poll.facade';
import { PollService } from './state/poll.service';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPoll.POLL_FEATURE_KEY, fromPoll.reducer),
    EffectsModule.forFeature([PollEffects])
  ],
  providers: [PollFacade, PollService, DataPersistence]
})
export class PollDataModule {}
