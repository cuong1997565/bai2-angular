import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title : string = 'Hoc Angular 4';

  public txtString : string = `Một người dân cho hay sau khi nghe kết quả phiên họp báo Chính Phủ được
  công bố trên báo chí về nồng độ thủy ngân ở khu vực cháy vượt ngưỡng từ 10 đến 30 lần cho phép, nhiều người dân rất bất an,
  không khí bị ô nhiễm sẽ ảnh hưởng đến sức khỏe, khiến cuộc sống đảo lộn.
  Bây giờ phải có các cơ quan chức năng như Bộ Quốc phòng vào để xử lý ô nhiễm nếu không sẽ rất ảnh hưởng đến người dân.`;

  public amount : number = 35.142567;

  public result : number = 0.8516;

  public names : string[] = ['abc','def','xyz'];

  public total : number = 75.8;

  public today : Date = new Date();

  public product : any = {
    id : 1,
    name : 'Samsung glaxy s7',
    price : 15,
    status :true
  };
}
