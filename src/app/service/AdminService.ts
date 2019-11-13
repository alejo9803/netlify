import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Pregunta } from './Pregunta';
import { Paciente } from './Paciente';
import { Observable } from 'rxjs';
import { Pregunta_Paciente } from './Pregunta_Paciente';
import { Historia } from './Historia';
import { Contador } from './Contador'
import { Psicologo } from './Psicologo';

@Injectable({
    providedIn: 'root',
})
export class AdminService{
    
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){}

    getPreguntas(i:number): Promise<Pregunta> {
        var resultado = this.http.get('http://proyectopredictmind.herokuapp.com/pregunta/'+i+'?format=json', {headers: this.headers}).toPromise()
        .then(response=> response.json() as Pregunta)        
        return resultado
    }

    getPaciente(i:number): Promise<Paciente> {
        var resultado = this.http.get('http://proyectopredictmind.herokuapp.com/paciente/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Paciente)
        
        return resultado
    }

    getPacientes(): Promise<Paciente[]>{
        return this.http.get('http://proyectopredictmind.herokuapp.com/paciente?format=json', {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Paciente[])
    }

    getPsicologos(): Promise<Psicologo[]>{
        return this.http.get('http://proyectopredictmind.herokuapp.com/psicologo?format=json', {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Psicologo[])
    }

    getPsicologo(i:number): Promise<Psicologo> {
        var resultado = this.http.get('http://proyectopredictmind.herokuapp.com/psicologo/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Psicologo)
        
        return resultado
    }

    getPreguntas_Paciente(): Promise<Pregunta_Paciente[]>{
        return this.http.get('http://proyectopredictmind.herokuapp.com/pregunta_paciente?format=json', {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Pregunta_Paciente[])
    }

    getHistorias(): Promise<Historia[]>{
        return this.http.get('http://proyectopredictmind.herokuapp.com/historia?format=json', {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Historia[])
    }

    getHistoria(i:number): Promise<Historia>{
        return this.http.get('http://proyectopredictmind.herokuapp.com/historia/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Historia)
    }
    

    createPregunta_Paciente(p: Pregunta_Paciente): Promise<Pregunta_Paciente>{
        return this.http
        .post("http://proyectopredictmind.herokuapp.com/pregunta_paciente", JSON.stringify(p), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Pregunta_Paciente)

    }

    createHistoria(h: Historia): Promise<Historia>{
        return this.http
        .post("http://proyectopredictmind.herokuapp.com/historia", JSON.stringify(h), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Historia)

    }

    getContador():Promise<Contador>{
        var resultado=this.http.get('http://proyectopredictmind.herokuapp.com/contador/1?format=json', {headers:this.headers})
        .toPromise()
        .then(response=>response.json() as Contador)

        return resultado
    }

    updateContador(contador:Contador):Promise<Contador>{
        var resultado=this.http.put('http://proyectopredictmind.herokuapp.com/contador/1?format=json', contador, {headers:this.headers})
        .toPromise()
        .then(response => response.json() as Contador)

        return resultado
    }
}