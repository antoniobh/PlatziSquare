import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

// Agregados por mi
  import { FormsModule } from '@angular/forms';
  import { AgmCoreModule } from '@agm/core';
  import { ResaltarDirective } from './directives/resaltar.directive';
  import { ContarClicksDirective } from './directives/contar-clicks.directive';
  import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
      ResaltarDirective,
      ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAGgjdg7WpTlm6yMmljvFiAqfECjKBkeEg'
        }),

        RouterModule.forRoot(appRoutes)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
