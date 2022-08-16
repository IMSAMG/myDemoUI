import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-afb',
    templateUrl: './afb.component.html',
    styleUrls: ['./afb.component.scss']
})

export class AfbComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    formBuilder: any;
    @ViewChild('sidenav') sidenav: MatSidenav | undefined;
    isExpanded = true;
    showSubmenu: boolean = false;
    isShowing = false;
    showSubSubMenu: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    back(): void{
        this.router.navigate(['']);
    }

    mouseenter() {
      if (!this.isExpanded) {
        this.isShowing = true;
      }
    }
    
    mouseleave() {
      if (!this.isExpanded) {
        this.isShowing = false;
      }
    }

    // tslint:disable-next-line:typedef
    onEdit(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

}
