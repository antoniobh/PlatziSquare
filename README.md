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
- __Estructurales__ : Directivas que cambian el DOM
- __Atributo__      : Directivas implementadas a traves de atributo que pueden modificar el elemento al que estan asignados.

#### - Directiva *ngFor ( Estructural )

`"<li *ngFor="let [Item] of [Arreglo]">{{[Arreglo.Variable]}}</li>"`

    se le puede declarar mas de una variable, por ejemplo:

`"<li *ngFor="[Arreglo..] ; [variable2]">{{Arreglo.Variable}}</li>"`

#### - Directiva *ngIf ( Estructural )

`<li *ngIf="[VariableBooleana]">{{Arreglo.Variable}}</li>`


#### - Directiva *ngStyle ( Atributo )

`[ngStyle]="{[atributo]:([condicion]) ? [attrSiVerdadero]:[attrSiFalso]}" `

#### - Directiva *ngClass ( Atributo )

`[ngClass]='{[condicion]}'`

Editado en el 2019
