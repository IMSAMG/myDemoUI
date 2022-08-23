import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

export interface Unit {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})

export class DemoComponent {

    fname!: string;
    lname!: string;
    age!: string;
    gender!: string;
    resident!: string;
    citizen!: string;
    participant!: string;
    blindDisabled!: string;
    selectedUnit!: string;

    unitControl = new FormControl('', [Validators.required]);
    unit: Unit[] = [
        { value: 'YEARS', viewValue: 'YEARS'},
        { value: 'MONTHS', viewValue: 'MONTHS'},
    ];

    constructor(private router: Router) { }

    addAdditionalInfo(): void {
        this.router.navigate(['additionalInfo']);
    }

    back(): void {
        this.router.navigate(['start']);
    }

    start(): void {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                fname: this.fname,
                lname: this.lname,
                age: this.age,
                units: this.selectedUnit,
                gender: this.gender,
                resident: this.resident,
                citizen: this.citizen,
                participant: this.participant,
                blindDisabled: this.blindDisabled
            }
        };
        this.router.navigate(['additionalInfo'], navigationExtras);
    }

    onEdit(): void{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    exit(): void {
        this.router.navigate(['']);
    }

    onRadioChange(): void{
    }

    login(): void {
      this.router.navigate(['login']);
    }
}
