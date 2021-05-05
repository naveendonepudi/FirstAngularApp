import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public firstName: string = '';
  public fullName: string = 'Naveen';
  public age: number = 0;
  public isEligible : boolean = false;
  public canActivateOtherModule : any;
  imageURL: string;
  noOfTimes: number = 0;

  
  constructor() {
    this.imageURL = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    this.firstName = 'Sasi';
    this.age = 28;
    this.isEligible = true;
    this.canActivateOtherModule = 10;
    this.canActivateOtherModule = 'Naveen';
  }

  ngOnInit(): void {
  }

  updateCounter(){
    this.noOfTimes = this.noOfTimes + 1;
  }

  updateFullName(evt: any){
    this.fullName = evt.target.value;
  }

}
