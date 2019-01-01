# Tipos de Binding

- String Interpolation

`"Welcome to {{ title }}!"`

- Property Binding

`"<button [disabled]='!ready'>Click me!</button>`

- TwoWays DataBinding

` <input
type="text" name="" placeholder="Nombre" value=""
[(ngModel)]="nombre"
/>`

Para mostrar el dato se usa un __StringInterpolation__

`<p>Mi nombre es {{nombre}}</p>`

# Directivas
- __Componentes__   : Directivas con un Template
- __Estructurales *__ : Directivas que cambian el DOM
- __Atributo []__      : Directivas implementadas a traves de atributo que pueden modificar el elemento al que estan asignados.

#### - Directiva *ngFor ( Estructural )

`"<li *ngFor="let [Item] of [Arreglo]">{{[Arreglo.Variable]}}</li>"`

    se le puede declarar mas de una variable, por ejemplo:

`"<li *ngFor="[Arreglo..] ; [variable2]">{{Arreglo.Variable}}</li>"`

#### - Directiva *ngIf ( Estructural )

`<li *ngIf="[VariableBooleana]">{{Arreglo.Variable}}</li>`

#### - Directiva [ngSwitch]
    Esta Directiva sirve para evaluar una expresion literal.

`<ng-container *ngFor="let Item of Arreglo" [ngSwitch]="Arreglo.Variable">`

`<span *ngSwitchCase="[Case]">[ValorPorMostrar]</span>`

`</ng-container>`


#### - Directiva *ngStyle ( Atributo )

`[ngStyle]="{[atributo]:([condicion]) ? [attrSiVerdadero]:[attrSiFalso]}" `

#### - Directiva *ngClass ( Atributo )

`[ngClass]='{[condicion]}'`




# CREACION DE DIRECTIVAS PROPIAS

  Para crear directivas propias debemos de crear una carpeta en el componente que estamos trabajando llamada 'directives', posteriormente debemos de crear la directiva usando el formato de __'[NombreDirectiva].directive.ts'__

  Posteriormente en el archivo de la directiva que estamos creando debemos de incluir el import de Directiva

`import {Directive, OnInit} from "@angular/core"`

tambien debemos de colocar el decorador de DIRECTIVAS
`@Directive({
    selector: [Nombre_Del_Selector]
  })`

Creamos el exportar la clase

`export class '[Nombre_Del_Selector]+Directive' implements OnInit{(){}}`


Dentro de este export debemos de incluir el constructor, con elRef y el renderer

`constructor(private elRef:ElementRef, private renderer:Renderer2){}`
