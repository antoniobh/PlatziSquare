import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Agregados por mi
  import { FormsModule } from '@angular/forms';
  import { AgmCoreModule } from '@agm/core';
  import { ResaltarDirective } from './directives/resaltar.directive'

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAGgjdg7WpTlm6yMmljvFiAqfECjKBkeEg'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
