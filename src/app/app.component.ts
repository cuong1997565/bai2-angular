import { Component, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, AfterViewInit {
  public isMarried : boolean =false;
  public name : string = '';
  public phone : number;

  public age : number = 20;

  public title : string = 'Lifecycle Hook';

  public isShowing = true;

  public total : number = 0;

  public value : string = 'ngContent';

  public content : string = 'ngContent';

  public users : any [] = [
    {
      id : 1,
      name : "Nguyen Van A",
      phone : '15654'
    },
    {
      id : 2,
      name : "Nguyen Van B",
      phone : '45456456'
    },
    {
      id : 3,
      name : "Nguyen Thi C",
      phone : '1231231'
    },
  ];

  @ViewChild('arrUserAfter') arrUserAfter : ElementRef;


  onHandleFullName (name : string)
  {
      this.name = name;
  }

  onHandlePhone (phone : number)
  {
    this.phone = phone;
  }

  onToggle() : void {
    this.isShowing = !this.isShowing;
  }

  amount(number1 : string, number2 : string) : void
  {
    this.total = parseInt(number1) + parseInt(number2);
    console.log(this.total);
  }

  onClick(value) : void {
      this.content = value;
  }

  ngAfterViewChecked() : void{
      console.log("ngAfterViewChecked : AppComponent");

    }

  ngAfterViewInit() : void{
    console.log("ngAfterViewInit : AppComponent");
    console.log(this.arrUserAfter);
  }

  addUser(value) : void {
      this.users.push({
        id : 999,
        name :value
      });
  }
}
