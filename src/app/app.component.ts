import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  ready = false;

//  Contructor de TS

    constructor(){
      setTimeout(() => {this.ready = true;},3000)
    }

  hacerAlgo(){
      console.log("Haciendo algo!");
  }
}
