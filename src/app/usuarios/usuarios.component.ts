import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  usuarios =new Array();

  
  constructor(private rutaActiva: ActivatedRoute, private AdminService:AdminService, private router: Router) {

    this.getHistorias()
    this.limpiar()
   }

   pregunta_paciente:Pregunta_Paciente[]
   historia:Historia
   psicologo:Psicologo
   paciente:Paciente
   pregunta:Pregunta

   async getHistorias(){

    await this.AdminService.getPreguntas_Paciente().then(pregunta_paciente => this.pregunta_paciente=pregunta_paciente)
    for(var i=0;i<this.pregunta_paciente.length;i++){
      await this.AdminService.getPaciente(this.pregunta_paciente[i].idPaciente).then(paciente => this.paciente=paciente)
      if(this.paciente.nombre==this.rutaActiva.snapshot.params.nombre){
        console.log("1")
      await this.AdminService.getHistoria(this.pregunta_paciente[i].idHistoria).then(historia => this.historia=historia)
      await this.AdminService.getPsicologo(this.historia.idPsicologo).then(psicologo => this.psicologo=psicologo)
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
   }

  limpiar(){
    
    for(var i=this.usuarios.length-1;i>=0;i--){
      if(this.usuarios[i].nombrePaciente===this.rutaActiva.snapshot.params.nombre){
        this.usuarios=this.usuarios.filter(a=> a !==this.usuarios[i])
        this.router.navigate(['/psicologo']);
      }
    }
    console.log(this.usuarios.length)
  }
  
  

  ngOnInit() {
  }

}
