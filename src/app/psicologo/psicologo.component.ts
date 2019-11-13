import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../service/Paciente';
import { AdminService } from '../service/AdminService'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.component.html',
  styleUrls: ['./psicologo.component.css']
})
export class PsicologoComponent implements OnInit {
  constructor(private router: Router, private AdminService: AdminService) {
    this.getUsuarios()
   }
 routes: Object[]=[{
   title:'Usuario',
   route:'/psicologo/usuario',
   icon:'dashboard'
 }]
 pacientes:Paciente[]

 async getUsuarios(){

  await this.AdminService.getPacientes().then(pacientes => this.pacientes=pacientes)

  for(var i=0;i<this.pacientes.length;i++){
    console.log(this.pacientes[i].idPaciente+'\n'+this.pacientes[i].nombre)
  if(this.pacientes[i].idPsicologo==parseInt(localStorage.getItem('email'))){
  this.routes.push( {
    title:""+this.pacientes[i].nombre,
    route:'/psicologo/usuario',
    icon :'dashboard',
   }
  )
  }
  }
  var a=this.routes.shift()
 }
  ngOnInit() {
  }

}
