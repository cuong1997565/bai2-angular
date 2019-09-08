import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe02',
  templateUrl: './pipe02.component.html',
  styleUrls: ['./pipe02.component.css']
})
export class Pipe02Component implements OnInit {

  public sortBy : string = 'name';

  public sortValue : number = 1;

  public products : any [] = [
    {
      id : 1,
      name : 'Iphone 7 Plus',
      price : 500
    },
    {
      id : 2,
      name : 'Iphone 6 Plus',
      price : 400
    },
    {
      id : 3,
      name : 'Samsung glaxy s7',
      price : 450
    },
    {
      id : 4,
      name : 'Oppo F1s',
      price : 200
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }

}
