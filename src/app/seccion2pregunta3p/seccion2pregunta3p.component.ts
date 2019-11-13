import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService'

@Component({
  selector: 'app-seccion2pregunta3p',
  templateUrl: './seccion2pregunta3p.component.html',
  styleUrls: ['./seccion2pregunta3p.component.css']
})
export class Seccion2pregunta3pComponent implements OnInit {
  constructor(private router: Router, private AdminService: AdminService) { 
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
    localStorage.setItem( 'respuesta7', respuesta);
    this.router.navigate(['/prediccion1seccion2p']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta7', respuesta);
      this.router.navigate(['/prediccion1seccion2p']);
      }

      reiniciar():void{
        for(var i=2;i<=7;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }

      getPregunta():void{
        this.AdminService.getPreguntas(13).then(function(data){
          console.log(data)
          document.getElementById("prueba").firstChild.textContent = data.descripcion
          
        })
        
     }
}
