import { Component } from '@angular/core';
import { Detail } from './detail/detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  details:Detail[];

  constructor(){
    this.details = [
      new Detail('Adam Lee', '101 Angular Rd', '1'),
      new Detail('John Doe', '321 Mean Stack', '2'),
      new Detail('Jane Smith', '404 Not Found', '3'),
    ]
    console.log(this.details);
  }
}

