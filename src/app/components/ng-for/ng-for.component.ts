import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  public names : string[] = ['TPHCM','Ha Noi'];
  public dataFromServers : string[] = ['TPHCM','Ha Noi','Vinh Long','Long An'];
  public products : any[] = [
    {
      id: 1,
      name : 'Iphone 6 plus',
      price : 8000000
    },
    {
      id: 2,
      name: 'Iphone 7 plus',
      price : 60000
    },
    {
      id: 3,
      name : 'Iphone 8 plus',
      price : 18000000
    },
    {
      id: 4,
      name: 'Iphone 9 plus',
      price : 200000
    },{
      id: 5,
      name : 'Samsung glaxy',
      price : 2000000
    },
    {
      id: 6,
      name: 'Samsung',
      price : 300000
    }
  ];

  public users : any[] = [
      {
        name: 'John Smith',
        country : 'USA'
      },
      {
        name: 'cuongnx',
        country: 'VN'
      },
      {
        name: 'John Cena',
        country: 'UAE'
      },
      {
        name: 'John',
        country: 'JAPAN'
      }
  ];
  constructor() { }

  ngOnInit() {
  }

  onLoadData()
  {
    console.log("data response");
  }

}
