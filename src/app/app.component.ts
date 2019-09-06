import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isMarried : boolean =false;
  public name : string = '';
  public phone : number;

  public age : number = 20;

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


  onHandleFullName (name : string)
  {
      this.name = name;
  }

  onHandlePhone (phone : number)
  {
    this.phone = phone;
  }
}
