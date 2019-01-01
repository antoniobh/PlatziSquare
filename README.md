# Tipos de Binding

- String Interpolation
- * Ejemplo *
_"Welcome to {{ title }}!"_
- Property Binding
-*Ejemplo*
_"<button [disabled]='!ready'>Click me!</button>"_
- TwoWays DataBinding
- *Ejemplo*
`<input
type="text" name="" placeholder="Nombre" value=""
[(ngModel)]="nombre"
/>

<p>
Mi nombre es {{nombre}}
</p>`
