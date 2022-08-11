import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
    selector: 'app-addinfo',
    templateUrl: './addInfo.component.html',
    styleUrls: ['./addInfo.component.scss']
})

export class AddInfoComponent implements OnInit {

    fname!: string;
    lname!: string;
    age!: string;
    gender!: string;
    resident!: string;
    citizen!: string;
    participant!: string;
    blindDisabled!: string;
    selectedUnit!: string;
    parent!: string;
    pregnant!: string;
    job!: string;
    income!: string;

    public hasData = false;
    constructor(private router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.fname = params.fname;
            this.lname = params.lname;
            this.age = params.age;
            this.selectedUnit = params.units;
            this.gender = params.gender;
            this.resident = params.resident;
            this.citizen = params.citizen;
            this.participant = params.participant;
            this.blindDisabled = params.blindDisabled;
        });
     }

    ngOnInit(): void {
    }

    back(): void {
        this.router.navigate(['member']);
    }

    save(): void {
        console.log(' Value is : ', this.fname );
        console.log(' Value is : ', this.lname );
        console.log(' Value is : ', this.age );
        console.log(' Value is : ', this.selectedUnit );
        console.log(' Value is : ', this.gender );
        console.log(' Value is : ', this.resident );
        console.log(' Value is : ', this.citizen );
        console.log(' Value is : ', this.participant );
        console.log(' Value is : ', this.blindDisabled );
        console.log(' Value is : ', this.parent );
        console.log(' Value is : ', this.pregnant );
        console.log(' Value is : ', this.job );
        console.log(' Value is : ', this.income );
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
                blindDisabled: this.blindDisabled,
                parent: this.parent,
                pregnant: this.pregnant,
                job: this.job,
                income: this.income
            }
        };
        this.router.navigate(['start'], navigationExtras);
    }

    onEdit(): void{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    exit(): void {
        this.router.navigate(['']);
    }

    onRadioChange(): void{
        console.log(' Value is : ', this.parent );
        console.log(' Value is : ', this.pregnant );
        console.log(' Value is : ', this.job );
        console.log(' Value is : ', this.income );
    }

}
