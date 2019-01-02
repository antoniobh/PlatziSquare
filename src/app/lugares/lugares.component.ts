import { Component }from '@angular/core';

@Component({
    selector      : 'app-lugares',
    templateUrl   : './lugares.component.html',
    styleUrls    : ['./lugares.component.css']
  })

export class LugaresComponent {
  title = 'PlatziSquare';
  ready = false;
  nombre = '';
  lugares:any = [
                  {id:1, plan: 'gratuito' ,cercania:1, active:false, nombre:'Floreria Gardencia'},
                  {id:2, plan: 'pagado' ,cercania:2, active:true, nombre:'Veterinaria'},
                  {id:3, plan: 'pagado' ,cercania:1, active:true, nombre:'Ferreteria'},
                  {id:4, plan: 'pagado' ,cercania:3, active:true, nombre:'Barberia'},
                  {id:5, plan: 'pagado' ,cercania:3, active:true, nombre:'Barberia'}
                ];
  lat: number = 10.0072897;
  lng: number = -84.11699091754;

    constructor(){
    }

  hacerAlgo(){
      console.log("Haciendo algo!");
  }
}
