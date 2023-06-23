import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compo-ex'

  

  daung:User={
    name:"Daung Daung",
    phone:"098764758",
    email:"daung@gmail.com"
  }
  viewCode =1;
}
