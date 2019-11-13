import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/AdminService'

@Component({
  selector: 'app-seccion1pregunta1p',
  templateUrl: './seccion1pregunta1p.component.html',
  styleUrls: ['./seccion1pregunta1p.component.css']
})
export class Seccion1pregunta1pComponent implements OnInit {

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
    localStorage.setItem( 'respuesta2', respuesta);
    this.router.navigate(['/seccion1pregunta2p']);
    }
    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta2', respuesta);
      this.router.navigate(['/seccion1pregunta2p']);
      } 

      getPregunta():void{
        this.AdminService.getPreguntas(8).then(function(data){
          console.log(data)
          document.getElementById("prueba").firstChild.textContent = data.descripcion
          
        })
        
     }

      reiniciar():void{
        for(var i=2;i<=2;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
