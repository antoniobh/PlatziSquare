#Tipos de Binding
    -String Interpolation
      -*Ejemplo*
        _"Welcome to {{ title }}!"_
    -Property Binding
      -*Ejemplo*
        _"<button [disabled]='!ready'>Click me!</button>"_
    -TwoWays DataBinding
      -*Ejemplo*
          _<input
              type="text" name="" placeholder="Nombre" value=""
              [(ngModel)]="nombre"
          />

          <p>
            Mi nombre es {{nombre}}
          </p>_

#Directivas
    -Componentes

    -Estructurales 'Estas empiezan con asterisco'
      -*Ejemplo*
        -Directiva 'ngFor'
        _"<li *ngFor="let [Item] of [Arreglo]">{{lugar.nombre}}</li>"_
        se le puede declarar mas de una variable, por ejemplo:
         _"<li *ngFor="[variable1] ; [variable2]">{{lugar.nombre}}</li>"_
        -Directiva ngIf
        _"<li *ngFor="let [Item] of [Arreglo]">{{lugar.nombre}}</li>"_
    -Atributos

#ngStyle

[ngStyle]="{[atributo]:([condicion]) ? [attrSiVerdadero]:[attrSiFalso]}"

#ngClass

[ngClass]='{[condicion]}'
