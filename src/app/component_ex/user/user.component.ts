import { Component, Input } from "@angular/core";
import { User } from "src/app/user";

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']

} 

)
export class UserComponent {
    count =0;

    add(){
        this.count++;
    }
    redu(){
        if(this.count == 0){
            return;
        }
        this.count--;
    }
    @Input()
    title?:string

    @Input()
    user?:User
    two=2
    three=3

    hide =true;

}