import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { MatTabGroup } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { StationsFacade } from '@iresa/web-portal-data';
import { take, filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'iresa-portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  selectedIdx$ = new BehaviorSubject<number>(0);
  constructor(private stationsFacade: StationsFacade) {}

  ngOnInit() {
    this.onAllStationsLoaded();
  }

  onAllStationsLoaded() {
    this.stationsFacade.loaded$
      .pipe(
        filter(s => !!s),
        take(1)
      )
      .subscribe(s => this.selectedIdx$.next(1));
  }

  onLoginSuccess(user) {
    this.stationsFacade.loadAll(user.uid);
  }
}
