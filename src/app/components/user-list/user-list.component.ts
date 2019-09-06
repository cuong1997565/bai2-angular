import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input('users') users : any[] = [];

  @Input('fullname') name : string;

  @Input('phone') phone : number;

  constructor() { }

  ngOnInit() {
  }

}
