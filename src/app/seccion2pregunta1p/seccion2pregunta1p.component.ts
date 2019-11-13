import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService';

@Component({
  selector: 'app-seccion2pregunta1p',
  templateUrl: './seccion2pregunta1p.component.html',
  styleUrls: ['./seccion2pregunta1p.component.css']
})
export class Seccion2pregunta1pComponent implements OnInit {

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
    localStorage.setItem( 'respuesta5', respuesta);
    this.router.navigate(['/seccion2pregunta2p']);
    }
    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta5', respuesta);
      this.router.navigate(['/seccion2pregunta2p']);
      }

      reiniciar():void{
        for(var i=2;i<=5;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }

      getPregunta():void{
        this.AdminService.getPreguntas(11).then(function(data){
          console.log(data)
          document.getElementById("prueba").firstChild.textContent = data.descripcion
          
        })
        
     }
}
