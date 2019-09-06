import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  public isSpecial :boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSpecial(){
    this.isSpecial = !this.isSpecial;
  }

  setClasses()
  {
    return {
      'border-blue' : this.isSpecial,
      'cl-red' : this.isSpecial,
      'pd-10' : this.isSpecial,
      'border-yellow' : !this.isSpecial
    }
  }

}
