import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-of-databinding',
  templateUrl: './combine-all-forms-of-databinding.component.html'
})
export class CombineAllFormsOfDatabindingComponent implements OnInit {
  allowNewServer:boolean = false;
  username:string = '';
  serverName:string = '';
  
  serverCreated:boolean = false;
  serves = ['TestServe 1', 'TestServer 2']; 
  serverCreationStatus:string = 'No Server was Created';
  

  ngOnInit(): void {
  }
  onAddServer(){
    this.serverCreationStatus = 'Server was Created';
    this.serves.push(this.serverName); 
    this.serverCreated = true;    
  }
  
  onUpdateServer(e:Event){
    this.serverName = (<HTMLInputElement>e.target).value;
   }
  
}
