import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-one',
  templateUrl: './custom-pipe-one.component.html',
  styleUrls: ['./custom-pipe-one.component.css']
})
export class CustomPipeOneComponent implements OnInit {

  public txtString : string = `Một người dân cho hay sau khi nghe kết quả phiên họp báo Chính Phủ được
  công bố trên báo chí về nồng độ thủy ngân ở khu vực cháy vượt ngưỡng từ 10 đến 30 lần cho phép, nhiều người dân rất bất an,
  không khí bị ô nhiễm sẽ ảnh hưởng đến sức khỏe, khiến cuộc sống đảo lộn.
  Bây giờ phải có các cơ quan chức năng như Bộ Quốc phòng vào để xử lý ô nhiễm nếu không sẽ rất ảnh hưởng đến người dân.`;

  public products : any[] = [
    {
      id : 1,
      name : 'Dell inspiron n5110',
      status : true
    },
    {
      id : 2,
      name : 'Iphone 7',
      status : false
    },
    {
      id : 3,
      name : 'Samsung glaxy s6',
      status : false
    },
    {
      id : 4,
      name : 'Lenovo',
      status : true
    }
  ];

  public idFilter :string;
  public nameFilter : string;
  public statusFilter :string;

  constructor() { }

  ngOnInit() {
  }

}
