import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  lounges:any[] = ['loung 1', 'loung 2']


  constructor(private router: Router, public route : ActivatedRoute){

  }


  onValChange(value:string){
    console.log("dasds",value)
    if(value==='kiosk'){
      this.router.navigate(['kiosk'], { relativeTo: this.route });
    }
    else{
      this.router.navigate(['today'], { relativeTo: this.route });

    }
  }

}
