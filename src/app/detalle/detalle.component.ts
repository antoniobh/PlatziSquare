import { Component }from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector      : 'app-detalle',
    templateUrl   : './detalle.component.html',
    styleUrls    : ['./detalle.component.css']
  })

export class DetalleComponent {

  lugares:any = [
                  {id:1, plan: 'gratuito' ,cercania:1, active:false, nombre:'Floreria Gardencia'},
                  {id:2, plan: 'pagado' ,cercania:2, active:true, nombre:'Veterinaria'},
                  {id:3, plan: 'pagado' ,cercania:1, active:true, nombre:'Ferreteria'},
                  {id:4, plan: 'pagado' ,cercania:3, active:true, nombre:'Barberia'},
                  {id:5, plan: 'pagado' ,cercania:3, active:true, nombre:'Barberia'}
                ];
    id = null;

    constructor(private route:ActivatedRoute){
      console.log(this.route.snapshot.params['id']);
      // console.log(this.route.snapshot.queryparams['action']);
       // console.log(this.route.snapshot.queryparams['referer']);
      this.id = this.route.snapshot.params['id'];
      console.log(this.buscarLugar())
    }

    buscarLugar(){
      /*
          El metodo Filter busca dentro el arreglo
          Filter regresa siempre un arreglo, por lo que se le indica que regrese el primero [0]
      */ 
      return this.lugares.filter((data) =>{return data.id == this.id})[0] || null;
      }

}
