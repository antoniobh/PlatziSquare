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

  export class 'ResaltarDirective' implements OnInit{
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
