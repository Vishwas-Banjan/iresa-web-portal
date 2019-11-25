import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';
import { AuthFacade } from './state/auth.facade';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './state/auth.service';
import { DataPersistence } from '@nrwl/angular';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthFacade, DataPersistence, AuthService]
})
export class AuthDataModule {}
