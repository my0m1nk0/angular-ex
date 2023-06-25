import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  message:string ='';

  onKeyUp(event:any){
    this.message = event.target.value;
    
    
  }

}
