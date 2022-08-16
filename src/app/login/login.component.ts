import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-rootlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  public loginValid = true;
  public username = '';
  public password = '';

  // tslint:disable-next-line:variable-name
  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
  ) {
    this.returnUrl = this._route.snapshot.queryParams.returnUrl;
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this._router.navigate(['apply']);
  }

  public forgotUsername(): void {
    this.loginValid = true;
    this._router.navigate(['user']);
  }

  onEdit(): void{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  back(): void {
    this._router.navigate(['']);
  }

}
