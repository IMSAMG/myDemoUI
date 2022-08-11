import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  title = 'CheckMyBenefits';
  showDiv = {
    previous : false,
    current : false,
    next : false
  };

  constructor(private router: Router) { }

  // tslint:disable-next-line:typedef
  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  login(): void {
    this.router.navigate(['login']);
  }

  apply(): void {
    this.router.navigate(['login']);
  }

  prescreen(): void {
    this.router.navigate(['prescreen']);
  }

  back(): void {
    this.router.navigate(['']);
  }

}
