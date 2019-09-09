import { Component, OnInit, OnDestroy, Input, SimpleChange, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnDestroy, DoCheck {

  public title : string = 'LifecycleHook Component';

  public previousTotal : number;

  @Input('total') total : number;

  constructor() {
    //console.log("constructor : Lifecycle Hook Componet");
  }

  ngOnInit() {
    //console.log("ngOnInit : Lifecycle Hook Componet");
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy : Lifecycle Hook Component");
  }

  ngOnChanges(simpleChanges : SimpleChange) {
    this.previousTotal = simpleChanges.total.previousValue;
    //console.log("ngOnChanges : Lifecycle Hook Componet");
  }

  ngDoCheck() {
    //console.log("ngDoCheck : Lifecycle Hook Component");
  }

}
