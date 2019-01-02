import { Component }from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';
@Component({
    selector      : 'app-detalle',
    templateUrl   : './detalle.component.html',
    styleUrls    : ['./detalle.component.css']
  })

export class DetalleComponent {

    id = null;
    lugar:any = {};
    lugares=null;

    constructor(private route:ActivatedRoute, private lugaresService:LugaresService){
      // console.log(this.route.snapshot.params['id']);
      // console.log(this.route.snapshot.queryparams['action']);
       // console.log(this.route.snapshot.queryparams['referer']);
      this.lugares = lugaresService.getLugares();
      this.lugar = lugaresService.buscarLugar(this.route.snapshot.params['id']);
    }
}
