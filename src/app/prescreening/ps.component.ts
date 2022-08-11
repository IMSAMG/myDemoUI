import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ps',
    templateUrl: './ps.component.html',
    styleUrls: ['./ps.component.scss']
})

export class PsComponent {

    constructor(private router: Router) { }

    back(): void {
        this.router.navigate(['']);
    }

    start(): void {
        this.router.navigate(['start']);
    }

    onEdit(): void{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    exit(): void {
        this.router.navigate(['']);
    }

}
