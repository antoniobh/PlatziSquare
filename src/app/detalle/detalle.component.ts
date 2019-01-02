import { Component }from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector      : 'app-detalle',
    templateUrl   : './detalle.component.html',
    styleUrls    : ['./detalle.component.css']
  })

export class DetalleComponent {

    constructor(private route:ActivatedRoute){
      // console.log(this.route.snapshot.params['id']);
      console.log(this.route.snapshot.queryparams['action']);
      console.log(this.route.snapshot.queryparams['referer']);
    }

}
