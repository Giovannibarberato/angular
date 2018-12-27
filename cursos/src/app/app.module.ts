import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosService } from './cursos/cursos.service';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    CriarCursoModule,
    CursosModule 
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
