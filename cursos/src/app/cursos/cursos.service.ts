import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private cursos: string[] = ["Angular", "html","css"];
    
    getCursos(){
    return this.cursos ;
    }
        addCurso (cursos:string ){
            this.cursos.push(cursos);
        } 

}
