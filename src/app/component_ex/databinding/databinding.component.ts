import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
changeRange(num: string) {
  this.value=Number(num);
}


   value=100;
  bgColor:string='#ff33ff'
   getColor(str:string){
    this.bgColor = str;
    

   }

   
   
   changeBackground():string{
    console.log(this.bgColor);
    
    
    return "background-color:" + this.bgColor + ";";
}

   

}
