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
                  {active:false, nombre:'Floreria Gardencia'},
                  {active:true, nombre:'Veterinaria'},
                  {active:true, nombre:'Ferreteria'},
                  {active:true, nombre:'Barberia'},
                ];
  lat: number = 10.0072897 ;
  lng: number = -84.11699091754 ;

//  Contructor de TS

    constructor(){
      setTimeout(() => {this.ready = true;},3000)
    }

  hacerAlgo(){
      console.log("Haciendo algo!");
  }
}
