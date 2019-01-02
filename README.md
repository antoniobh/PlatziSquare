# Tipos de Binding

- String Interpolation

```javascript
"Welcome to {{ title }}!"
```
- Property Binding
```html
<button [disabled]='!ready'>Click me!</button>
```
- TwoWays DataBinding

```html
<input
type="text" name="" placeholder="Nombre" value=""
[(ngModel)]="nombre"
/>
```
>Para mostrar el dato se usa un __StringInterpolation__

```html
 <p>Mi nombre es {{nombre}}</p>
 ```

# Directivas
- __Componentes__   : Directivas con un Template
- __Estructurales *__ : Directivas que cambian el DOM
- __Atributo []__      : Directivas implementadas a traves de atributo que pueden modificar el elemento al que estan asignados.

#### - Directiva *ngFor ( Estructural )

```html
<li *ngFor="let [Item] of [Arreglo]">{{[Arreglo.Variable]}}</li>```

>se le puede declarar mas de una variable, por ejemplo:

```html
<li *ngFor="[Arreglo..] ; [variable2]">{{Arreglo.Variable}}</li>```

#### - Directiva *ngIf ( Estructural )

```html
<li *ngIf="[VariableBooleana]">{{Arreglo.Variable}}</li>```

#### - Directiva [ngSwitch]
>Esta Directiva sirve para evaluar una expresion literal.

```html
<ng-container *ngFor="let Item of Arreglo" [ngSwitch]="Arreglo.Variable">

  <span *ngSwitchCase="[Case]">[ValorPorMostrar]</span>

</ng-container>```


#### - Directiva *ngStyle ( Atributo )

```javascript
[ngStyle]="{[atributo]:([condicion]) ? [attrSiVerdadero]:[attrSiFalso]}" ```

#### - Directiva *ngClass ( Atributo )

```javascript
[ngClass]='{[condicion]}'```




# CREACION DE DIRECTIVAS PROPIAS

  Para crear directivas propias debemos de crear una carpeta en el componente que estamos trabajando llamada 'directives', posteriormente debemos de crear la directiva usando el formato de __'[NombreDirectiva].directive.ts'__

  Posteriormente en el archivo de la directiva que estamos creando debemos de incluir el import de Directiva y los demas componentes necesarios.

```javascript
import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core"
```

tambien debemos de colocar el decorador de DIRECTIVAS
```javascript
@Directive({
    selector: [Nombre_Del_Selector]
  })```

Creamos el exportar la clase

```javascript
export class '[Nombre_Del_Selector]+Directive' implements OnInit{
  ngOnInit(){

  }
}
```


Dentro de este export debemos de incluir el constructor, con elRef y el renderer

```javascript
export...{
  constructor(private elRef:ElementRef, private renderer:Renderer2){

  }
  ngOnInit(){
    /*
        contenido del metodo, este ejemplo cambia el color de fondo
    */
    if(this.plan === 'pagado'){
      // esta funcion recibe 3 parametros (El elemento navito, el atributo y el valor)
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}
```

>Debemos de crear la variable Plan, para eso usamos @Input, la cual debemos importar desde el core de angular

```javascript
export class ResaltarDirective implements OnInit(){
  constructor(...){}

    @Input('resaltar') plan : string = '';
    //usamos el 'resaltar' ya que esta vinculado con el selector
}
```
#### Para este ejemplo el codigo completo quedaria de esta manera:

```javascript
import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core"

@Directive({
    selector: '[resaltar]'
  })

  export class ResaltarDirective implements OnInit{
    @Input('resaltar') plan : string = '';
    ngOnInit(){
      if(this.plan === 'pagado'){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
      }
    }
  }

```

Finalmente para poder hacer uso de nuestra Directiva debemos de incluirla en __app.module.ts__ haciendo el correspondiente import

```javascript
  import { ResaltarDirective } from './directives/resaltar.directive'
```

```javascript
@NgModule({
  declarations: [
    ...
    ResaltarDirective
  ],

  ...})
```

Para hacer uso de las Directivas que hemos creado lo hacemos como con cualquier directiva, si la directiva no recibe parametros no es nesesario encerrarla entre llaves cuadradas, simplemente se coloca el nombre de la directivas

Ejemplo:

```html
  <a nombre-directiva>...</a>
```

# Host Listeners

Los HostListeners se usan para escuchar un evento especifico.

Primeramente se crea una directiva.

```javascript

import { Directive } from '@angular/core';

@Directive({
    selector: '[[Selector]]'
  })

export class [DirectiveName]{

    /*
      Esta funcion recibe 3 parametros
        1) Evento {[click],[mouseOver], [mouseLeft], etc}
        2) Un arreglo
        3) En que momento se Dispara
    */
    @HostListener('click',['$event.target']) onClick(btn){
      //Funcion a hacer
    }
}

```


# Host Binding

Permite editar el elemento del dom desde la directiva.
este metodo debe de ser combinado con el HostListener para funcionar adecuadamente.

```javascript
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: 'li[contar-clicks]'
  })

export class ContarClicksDirective{
    clickN = 0;

    @HostBinding('style.opacity') opacity: number = .1;

    @HostListener('click',['$event.target']) onClick(btn){
      console.log('a',btn,"Numero de clicks:", this.clickN++);
      this.opacity += .1;
    }
}
```


# Bootstrap

Para hacer uso de Bootstrap debemos de instalar el paquete con el npm y posteriormente en el archivo de __.angular-cli.json__ incluimos el Bootstrap, este archivo es donde angular busca que paquetes ocupa para correr.

lo integramos en la parte de styles.

```javascript

...
"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
...
```


# Ruteo

El router es la forma en la que Angular monta un componente en el dom segun la incluirla


para configurar el Router debemos de editar el archivo __app.module.ts__


```javascript
// Agregamos el correspondinte 'import'
import { Routes } from '@angular/router';

//Creamos la constante de tipo 'Routes'

const appRoutes: Routes = [
  {patch: 'lugares', component: AppComponent}
]
```

# Implementacion de Rutas

Para que el proyecto funcione adecuadamente con mas de 1 ruta debemos de hacer las configuraciones correspondientes.

para eso se debe de editar el archivo __app.module.ts__

a continuacion se implementa el __RouterModule__.

En la seccion de imports agregamos las siguientes lineas

```javascript
// se agrega el import de RouterModule
import { Routes, RouterModule } from '@angular/router';

//se agrega el metodo en la seccion de imports

imports:[
  ...
  // se le pasa como argumento el arreglo de rutas.
  RouterModule.forRoot(appRoutes);
]
```
