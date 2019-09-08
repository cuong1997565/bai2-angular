import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe01',
  templateUrl: './pipe01.component.html',
  styleUrls: ['./pipe01.component.css']
})
export class Pipe01Component implements OnInit {

  public arrNumber : number[] = [1,3,2,4,7];

  public sortValue : number = 1;

  public name : string = '';

  constructor() { }

  ngOnInit() {
  }

  onHandleSort(value) : void
  {
     this.sortValue = value;
  }

}
