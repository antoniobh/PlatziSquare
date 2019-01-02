import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Agregados por mi
  import { FormsModule } from '@angular/forms';
  import { AgmCoreModule } from '@agm/core';
  import { ResaltarDirective } from './directives/resaltar.directive';
  import { ContarClicksDirective } from './directives/contar-clicks.directive';
  import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {patch: '', component: AppComponent}
  {patch: 'lugares', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
