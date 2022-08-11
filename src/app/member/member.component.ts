import { Component, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DemoComponent } from '../demographic/demo.component';

export interface IMembers {
    fname: string;
    lname: string;
    age: string;
    gender: string;
    resident: string;
    citizen: string;
    participant: string;
    blindDisabled: string;
    selectedUnit: string;
    parent: string;
    pregnant: string;
    job: string;
    income: string;
}


@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})


export class MemberComponent implements IMembers {

    members: IMembers[] = [];
    memb = this.members[0];
    user = new BehaviorSubject(null) as unknown as BehaviorSubject<IMembers>;

    @ViewChild(DemoComponent) demographics: any;

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
    showDiv = {
        hasData : false,
      };



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

        this.members = [
            {fname: this.fname, lname: this.lname, age: this.age, gender: this.gender,
                resident: this.resident, citizen: this.citizen, participant: this.participant,
                blindDisabled: this.blindDisabled, parent: this.parent, pregnant: this.pregnant,
                job: this.job, income: this.income, selectedUnit: this.selectedUnit}
          ];
        if (this.fname !== undefined){
            this.showDiv.hasData = true;
        }

    }

    onClick(): void {
        if (this.showDiv.hasData) {
            this.popup = false;
            const navigationExtras: NavigationExtras = {
                queryParams: {
                    fname: this.fname,
                    lname: this.lname,
                    age: this.age,
                    selectedUnit: this.selectedUnit,
                    gender: this.gender,
                    resident: this.resident,
                    citizen: this.citizen,
                    participant: this.participant,
                    blindDisabled: this.blindDisabled,
                    parent: this.parent,
                    pregnant: this.pregnant,
                    job: this.job,
                    income: this.income,
                }
            };
            this.router.navigate(['eligResults'], navigationExtras);
        } else {
            this.popup = true;
        }

    }

    Close(): void {
        this.popup = false;
     }


    addMember(): void {
        this.router.navigate(['member']);
    }

    onEdit(): void{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    back(): void {
        this.router.navigate(['prescreen']);
    }

    exit(): void {
        this.router.navigate(['']);
    }

    editMember(): void {
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
        this.router.navigate(['member'], navigationExtras);
    }

    deleteMember(): void {
        // tslint:disable-next-line:no-unused-expression
        this.memb === null;
        this.router.navigate(['start']).then(succeeded => {
            if (succeeded)
            {
                if (this.members[0] === undefined){
                    this.showDiv.hasData = false;
                }
            }
        })
        .catch(error => {
            // Handle the error
        });
    }


}
