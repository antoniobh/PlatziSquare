import { Component }from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector      : 'app-lugares',
    templateUrl   : './lugares.component.html',
    styleUrls    : ['./lugares.component.css']
  })

export class LugaresComponent {
  title = 'PlatziSquare';
  ready = false;
  nombre = '';
  lugares = null;
  lat: number = 10.0072897;
  lng: number = -84.11699091754;

    constructor(private lugaresService: LugaresService){
      this.lugares = lugaresService.getLugares();
    }

  hacerAlgo(){
      console.log("Haciendo algo!");
  }
}
