import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  constructor(private appService: AppService){}
  data = this.appService.data;
  passArray=[];
  totalArray = [];
  

  computeMarks(a,b,c){

    let totalPass = 0;
    let d = Number(a);
    if(d>20){
      
      totalPass = totalPass+1;
    }
    let e = Number(b);
    if(e>20){
      totalPass = totalPass+1;
    }
    
    let f = Number(c);
    if(f>20){
      totalPass = totalPass+1;
    }

    let pass = false;
    if(totalPass==3){
      pass = true;
      
    }


    this.passArray.push(pass);
    this.totalArray.push(d+e+f);
    return d+e+f;
    
  }
  
  
  

  
}
