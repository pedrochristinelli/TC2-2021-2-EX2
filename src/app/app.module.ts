import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Pedro Henrique Christinelli Serra - SC3001563