import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService{

  lugares:any = [
                  {id:1, plan: 'gratuito' ,cercania:1, active:false, nombre:'Floreria Gardencia', description:'Descripcion 1'},
                  {id:2, plan: 'pagado' ,cercania:2, active:true, nombre:'Veterinaria', description:'Descripcion 2'},
                  {id:3, plan: 'pagado' ,cercania:1, active:true, nombre:'Ferreteria', description:'Descripcion 2'},
                  {id:4, plan: 'pagado' ,cercania:3, active:true, nombre:'Barberia', description:'Descripcion 3'},
                  {id:5, plan: 'pagado' ,cercania:3, active:true, nombre:'Barberia', description:'Descripcion 4'}
                ];


  public getLugares(){
    return this.lugares;
  }

  public buscarLugar(id){
    /*
        El metodo Filter busca dentro el arreglo
        Filter regresa siempre un arreglo, por lo que se le indica que regrese el primero [0]
    */
    return this.lugares.filter((data) =>{return data.id == id})[0] || null;
    }

}
