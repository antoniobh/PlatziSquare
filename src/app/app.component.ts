import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  ready = false;
  nombre = '';
  lugares:any = [
                  {active:true, nombre:'Floreria Gardencia'},
                  {active:true, nombre:'Veterinaria'},
                  {active:true, nombre:'Ferreteria'},
                  {active:true, nombre:'Barberia'},
                ]

//  Contructor de TS

    constructor(){
      setTimeout(() => {this.ready = true;},3000)
    }

  hacerAlgo(){
      console.log("Haciendo algo!");
  }
}
