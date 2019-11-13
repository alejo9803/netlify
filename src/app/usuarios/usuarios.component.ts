import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Historia } from '../service/Historia';
import { Pregunta_Paciente } from '../service/Pregunta_Paciente'
import { AdminService } from '../service/AdminService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios :Object[] =[
{

  id:'1',
  descripcion:'oe'

}

  ]
  constructor(private rutaActiva: ActivatedRoute, private AdminService:AdminService) {
    this.getUsuarios()
   }

  ngOnInit() {
  }
  routes: Object[]=[{
    title:'Usuario',
    route:'/psicologo/usuario',
    icon:'dashboard'
  }]

  pregunta_paciente:Pregunta_Paciente[]
  historias:Historia[]
  historial:Historia[]

  async getUsuarios(){
 
   await this.AdminService.getPreguntas_Paciente().then(pregunta_paciente=> this.pregunta_paciente=pregunta_paciente)
 
   for(var i=0;i<this.pregunta_paciente.length;i++){
     console.log(this.pregunta_paciente[i].idHistoria+'\n'+this.pregunta_paciente[i])
   if(this.pregunta_paciente[i].idPaciente===this.rutaActiva.snapshot.params.nombre){
     await this.AdminService.getHistorias().then(historias => this.historias=historias)
     for(var j=0;j<this.historias.length;j++){
      if(this.historias[j].idHistoria==this.pregunta_paciente[i].idHistoria){
        if(this.historial.length==0){
          this.historial.push(this.historias[j])
        }
        else{
          var cambia=true
          for(var k=0; k<this.historial.length;k++){
            if(this.historias[j]==this.historial[k]){
              cambia=false
            }
          }
          if(cambia){
            this.historial.push(this.historias[j])
          }
        }
      }
     }
   }
   }
  
   var b=this.historial.shift()
   this.getHistorias(this.historial)
   
  }
  getHistorias(historial:Historia[]){
    for(var i=0; i < historial.length;i++){
      this.routes.push( {
        title:""+this.historial[i].idHistoria+""+this.historial[i].fecha,
        route:'/psicologo/usuario/descusuario',
        icon :'dashboard',
       }
    }
    var a=this.routes.shift()
  }
}
