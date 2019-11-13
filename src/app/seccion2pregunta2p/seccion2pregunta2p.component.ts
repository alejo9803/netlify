import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService'

@Component({
  selector: 'app-seccion2pregunta2p',
  templateUrl: './seccion2pregunta2p.component.html',
  styleUrls: ['./seccion2pregunta2p.component.css']
})
export class Seccion2pregunta2pComponent implements OnInit {

  constructor(private router: Router, private AdminService:AdminService) { 
    this.getPregunta();
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }

  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta6', respuesta);
    this.router.navigate(['/seccion2pregunta3p']);
    }
    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta6', respuesta);
      this.router.navigate(['/seccion2pregunta3p']);
      }

      reiniciar():void{
        for(var i=2;i<=6;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }

      getPregunta():void{
        this.AdminService.getPreguntas(12).then(function(data){
          console.log(data)
          document.getElementById("prueba").firstChild.textContent = data.descripcion
          
        })
        
     }
}
