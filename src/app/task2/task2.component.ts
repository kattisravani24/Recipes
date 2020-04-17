import { Component} from '@angular/core';

@Component({
  selector: 'task2',
  templateUrl: './task2.component.html',
  styles: [`
    .white-text{
      color: white;
    }
  `]
})
export class Task2Component{
  showSecret:boolean = true;
  log = [];
  
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

} 
