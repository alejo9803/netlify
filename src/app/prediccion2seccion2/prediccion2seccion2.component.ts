import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService';


import { Pregunta_Paciente } from '../service/Pregunta_Paciente'
import { Historia } from '../service/Historia';
import { Pregunta } from '../service/Pregunta';
import { Contador } from '../service/Contador';
import { Paciente } from '../service/Paciente';


@Component({
  selector: 'app-prediccion2seccion2',
  templateUrl: './prediccion2seccion2.component.html',
  styleUrls: ['./prediccion2seccion2.component.css']
})
export class Prediccion2seccion2Component implements OnInit {

  constructor(private router: Router, private AdminService:AdminService ) {
    
    this.createHistoria();
    
   
    
  }

  ngOnInit() {
  }
  logout(){
    
    this.reiniciar();
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
    preguntas:Number[]
  createPregunta_Paciente(): void{
    var pregunta= new Pregunta_Paciente()
    var paciente= parseInt(localStorage.getItem('email'))
    var admin=this.AdminService
    
      var respuesta1= localStorage.getItem('respuesta2')
      this.preguntas.push(parseInt(localStorage.getItem('respuesta2')))
      this.AdminService.getContador().then(function(data){
        pregunta.idPregunta_Paciente=data.contadorPregunta_Paciente+1
        pregunta.idHistoria=data.contadorHistorias
        pregunta.idPaciente=paciente;
        pregunta.idPregunta=2;
        if(respuesta1==="1"){
          pregunta.respuesta='Si';
        }
        if(respuesta1==="0"){
          pregunta.respuesta='No';
        }
        admin.createPregunta_Paciente(pregunta)
      })

      var respuesta2= localStorage.getItem('respuesta3')
      this.preguntas.push(parseInt(localStorage.getItem('respuesta3')))
      this.AdminService.getContador().then(function(data){
        pregunta.idPregunta_Paciente=data.contadorPregunta_Paciente+2
        pregunta.idHistoria=data.contadorHistorias
        pregunta.idPaciente=paciente;
        pregunta.idPregunta=3;
        if(respuesta2==="1"){
          pregunta.respuesta='Si';
        }
        if(respuesta2==="0"){
          pregunta.respuesta='No';
        }
        admin.createPregunta_Paciente(pregunta)
      })

      var respuesta3= localStorage.getItem('respuesta4')
      this.preguntas.push(parseInt(localStorage.getItem('respuesta4')))
      this.AdminService.getContador().then(function(data){
        pregunta.idPregunta_Paciente=data.contadorPregunta_Paciente+3
        pregunta.idHistoria=data.contadorHistorias
        pregunta.idPaciente=paciente;
        pregunta.idPregunta=4;
        if(respuesta3==="1"){
          pregunta.respuesta='Si';
        }
        if(respuesta3==="0"){
          pregunta.respuesta='No';
        }
        admin.createPregunta_Paciente(pregunta)
      })

      var respuesta4= localStorage.getItem('respuesta5')
      this.preguntas.push(parseInt(localStorage.getItem('respuesta5')))
      this.AdminService.getContador().then(function(data){
        pregunta.idPregunta_Paciente=data.contadorPregunta_Paciente+4
        pregunta.idHistoria=data.contadorHistorias
        pregunta.idPaciente=paciente;
        pregunta.idPregunta=5;
        if(respuesta4==="1"){
          pregunta.respuesta='Si';
        }
        if(respuesta4==="0"){
          pregunta.respuesta='No';
        }
        admin.createPregunta_Paciente(pregunta)
      })

      var respuesta5= localStorage.getItem('respuesta6')
      this.preguntas.push(parseInt(localStorage.getItem('respuesta6')))
      this.AdminService.getContador().then(function(data){
        pregunta.idPregunta_Paciente=data.contadorPregunta_Paciente+5
        pregunta.idHistoria=data.contadorHistorias
        pregunta.idPaciente=paciente;
        pregunta.idPregunta=6;
        if(respuesta5==="1"){
          pregunta.respuesta='Si';
        }
        if(respuesta5==="0"){
          pregunta.respuesta='No';
        }
        admin.createPregunta_Paciente(pregunta)
      })

      var respuesta6= localStorage.getItem('respuesta7')
      this.preguntas.push(parseInt(localStorage.getItem('respuesta7')))
      this.AdminService.getContador().then(function(data){
        pregunta.idPregunta_Paciente=data.contadorPregunta_Paciente+6
        pregunta.idHistoria=data.contadorHistorias
        pregunta.idPaciente=paciente;
        pregunta.idPregunta=7;
        if(respuesta6==="1"){
          pregunta.respuesta='Si';
        }
        if(respuesta6==="0"){
          pregunta.respuesta='No';
        }
        admin.createPregunta_Paciente(pregunta)
      })
       
    var contadoractual=new Contador
    this.AdminService.getContador().then(function(data){
      contadoractual.contadorHistorias=data.contadorHistorias
      contadoractual.idContador=1
      contadoractual.contadorPregunta_Paciente=data.contadorPregunta_Paciente+6
      admin.updateContador(contadoractual) 
    })
    
  }

  createHistoria():void{

    var historia=new Historia()
    var admin=this.AdminService
    var paciente=parseInt(localStorage.getItem('email'))
    this.AdminService.getContador().then(function(data){
      historia.idHistoria=data.contadorHistorias+1
      historia.descripcion='';
        var contadoractual=new Contador
        contadoractual.contadorHistorias=historia.idHistoria
        contadoractual.idContador=1
        contadoractual.contadorPregunta_Paciente=data.contadorPregunta_Paciente
        admin.updateContador(contadoractual)
      var f = new Date();
      historia.fecha=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      historia.prediccion='';
      admin.getPaciente(paciente).then(function(data){
        historia.idPsicologo=data.idPsicologo
        console.log(historia)
        admin.createHistoria(historia)
      })
      
      })
  }

  
  

  

  reiniciar():void{
    this.createPregunta_Paciente();
    for(var i=2;i<=7;i++){
      localStorage.removeItem('respuesta'+i);
    }
  }

}
