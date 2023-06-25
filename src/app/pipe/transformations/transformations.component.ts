import { Component } from '@angular/core';

@Component({
  templateUrl: './transformations.component.html',
  styleUrls: ['./transformations.component.css']
})
export class TransformationsComponent {

  user={
    name:'aung aung',
    role:'admin'
  }
  message = "Hello Angular Pipes"
  today = new Date();

  data1 = 3.23432525
data = 23434235

per=1200;
}
