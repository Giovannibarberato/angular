import { CriarCursoComponent } from './criar-curso.component';



import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';



import { CursosService } from '../cursos/cursos.service';
import { CursosModule } from '../cursos/cursos.module';




@NgModule({
  declarations: [
    CriarCursoComponent
    
  ],
  
  imports: [
    CommonModule,
   
   
    
  ],
  exports:[CriarCursoComponent],
  //providers: [CursosService],
  
})
export class CriarCursoModule { }
