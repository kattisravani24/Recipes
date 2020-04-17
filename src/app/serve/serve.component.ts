import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './serve.component.html',
  styles:[` .online{border:2px solid green;} ` ]
})
export class ServeComponent implements OnInit {
  serverId:number = 10;
  serverStatus:string;
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
  }

  ngOnInit(): void {
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
