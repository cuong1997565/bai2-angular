import { Component, OnInit, AfterContentInit, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-other-lifecycle',
  templateUrl: './other-lifecycle.component.html',
  styleUrls: ['./other-lifecycle.component.css']
})
export class OtherLifecycleComponent implements OnInit, AfterContentInit, AfterContentChecked {

  public title :string = 'Other Lifecycle';

  @ContentChild('value') value : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
      //console.log("ngAfterContentInit : OtherLifecycleComponent");
  }

  ngAfterContentChecked() {
      //console.log("ngAfterContentChecked : OtherLifecycleComponent");
  }

}
