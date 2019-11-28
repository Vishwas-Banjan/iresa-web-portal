import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@iresa/web-portal-data';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'iresa-portal-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  @Output()
  loginSuccess = new EventEmitter<null>();

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit() {
    this.buildForm();
    this.onLoginSuccess();
  }

  get loading$() {
    return this.authFacade.loading$;
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  login() {
    this.authFacade.login(this.userForm.value);
  }

  onLoginSuccess() {
    this.authFacade.loggedIn$
      .pipe(
        filter(s => !!s.loggedIn),
        take(1)
      )
      .subscribe(s => this.loginSuccess.next(s.user));
  }
}
