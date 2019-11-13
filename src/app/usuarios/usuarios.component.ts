import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../service/AdminService';
import { Pregunta_Paciente } from '../service/Pregunta_Paciente';
import { Historia } from '../service/Historia'
import { Psicologo } from '../service/Psicologo';
import { Paciente } from '../service/Paciente';
import { Pregunta } from '../service/Pregunta';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios :Object[] =[
{

    idHistoria:1,
    fecha:"13/11",
    psicologo:0,
    idPregunta_Paciente:0,
    nombrePaciente:"",
    pregunta:"",
    respuesta:"",


}

  ]
  constructor(private rutaActiva: ActivatedRoute, private AdminService:AdminService) {

    this.getHistorias()
   }

   pregunta_paciente:Pregunta_Paciente[]
   historia:Historia
   psicologo:Psicologo
   paciente:Paciente
   pregunta:Pregunta

   async getHistorias(){

    await this.AdminService.getPreguntas_Paciente().then(pregunta_paciente => this.pregunta_paciente=pregunta_paciente)
    for(var i=0;i<this.pregunta_paciente.length;i++){
      if(this.pregunta_paciente[i].idPaciente==this.rutaActiva.snapshot.params.nombre){
        console.log("1")
      await this.AdminService.getHistoria(this.pregunta_paciente[i].idHistoria).then(historia => this.historia=historia)
      await this.AdminService.getPsicologo(this.historia.idPsicologo).then(psicologo => this.psicologo=psicologo)
      await this.AdminService.getPaciente(this.pregunta_paciente[i].idPaciente).then(paciente => this.paciente=paciente)
      await this.AdminService.getPreguntas(this.pregunta_paciente[i].idPregunta).then(pregunta => this.pregunta=pregunta)
      this.usuarios.push({
        idHistoria:this.historia.idHistoria,
        fecha:this.historia.fecha,
        psicologo:this.psicologo.nombre,
        idPregunta_Paciente:this.pregunta_paciente[i].idPregunta_Paciente,
        nombrePaciente:this.paciente.nombre,
        pregunta:this.pregunta.descripcion,
        respuesta:this.pregunta_paciente[i].respuesta
      })
    }
    }
    var a=this.usuarios.shift()
   }
  

  ngOnInit() {
  }

}
