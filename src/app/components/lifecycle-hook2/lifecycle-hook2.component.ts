import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook2',
  templateUrl: './lifecycle-hook2.component.html',
  styleUrls: ['./lifecycle-hook2.component.css']
})
export class LifecycleHook2Component implements OnInit {

  public title : string = 'ngAfterView and ngAfterViewChecked';

  constructor() { }

  ngOnInit() {
  }

}
