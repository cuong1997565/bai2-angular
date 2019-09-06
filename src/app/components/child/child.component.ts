import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public txtFullName : string = '';

  public txtPhone : number ;

  @Input('married') isMarried: boolean = false;

  @Input('isAge') isAge : number;

  @Output('txtFullName') onHandleFullName = new EventEmitter<string>();

  @Output('txtPhone') onHandlePhone = new EventEmitter<number>();

  //@Input('name') name : string;
  private _name : string;

  @Input()

  set name(name : string)
  {
    this._name = name;
  }

  get name()
  {
    return this._name;
  }

  onSubmitForm()
  {
      this.onHandleFullName.emit(this.txtFullName);
      this.onHandlePhone.emit(this.txtPhone);
  }

  constructor() { }

  ngOnInit() {
  }

}
