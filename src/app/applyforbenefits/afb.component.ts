import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    back(): void{
        
    }

}
