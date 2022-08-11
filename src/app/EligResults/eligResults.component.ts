import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
    selector: 'app-eligresults',
    templateUrl: './eligResults.component.html',
    styleUrls: ['./eligResults.component.scss']
})

export class EligResultsComponent implements OnInit {

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
    popup = false;
    showCash = {
        hasData : false,
      };
    showMed = {
        hasData : false,
      };
    showFood = {
        hasData : false,
      };

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
            this.parent = params.parent;
            this.pregnant = params.pregnant;
            this.job = params.job;
            this.income = params.income;
        });

        if (this.job === undefined || this.job === 'n'){
            this.showCash.hasData = true;
        }

        if (this.pregnant !== undefined && this.pregnant === 'y'){
            this.showMed.hasData = true;
        }
        
        if (this.parent !== undefined && this.parent === 'y'){
            this.showFood.hasData = true;
        }

        if (this.resident !== undefined && this.resident === 'n'){
            this.showFood.hasData = false;
            this.showMed.hasData = false;
            this.showCash.hasData = false;
        }
     }

    ngOnInit(): void {
    }

    apply(): void {
        this.router.navigate(['login']);
    }

    save(): void {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                fname: this.fname,
                lname: this.lname,
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
    }

}
