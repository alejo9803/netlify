import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AdminService } from './../service/AdminService';
import { Paciente } from '../service/Paciente';
import { Psicologo } from '../service/Psicologo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private AdminService : AdminService) {
   }

  ngOnInit() {
  }


  pacientes : Paciente[];
  psicologos : Psicologo[];
  inicio=true

  async login(form: NgForm){
    var con=0
    await this.AdminService.getPacientes().then(pacientes => this.pacientes=pacientes)
    for(var i=0; i<this.pacientes.length;i++){
      if(form.value.password==this.pacientes[i].idPaciente && form.value.identificacion===this.pacientes[i].nombre){
        localStorage.setItem('email',form.value.password)
        con=1
        this.router.navigate(['/introduccion']);
        
      }
      else{
        await this.AdminService.getPsicologos().then(psicologos => this.psicologos=psicologos)
        for(var j=0; j<this.psicologos.length;j++){
          if(form.value.password==this.psicologos[j].idPsicologo && form.value.identificacion===this.psicologos[j].nombre){
            localStorage.setItem('email',form.value.password)
            con=1
            this.router.navigate(['/psicologo']);
            

          }
        }
      }
    }
    console.log(con)
    if(con==0){
      this.inicio=false
    }
  }

  inicioMetodo():Boolean{
    
    return !this.inicio
  }




}
