import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevlTextComponent } from './components/devl-text/devl-text.component';
import { DevlTextModule } from 'public_api';

@NgModule({
  declarations: [
    AppComponent,
    DevlTextComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DevlTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
